import Stripe from "stripe";
import { dbConnection } from "./db";

export async function handleStripeCheckoutSessionCompleted({
  session,
  stripe,
}: {
  session: Stripe.Checkout.Session;
  stripe: Stripe;
}) {
  console.log("Handling checkout session completed:", session);
  const sql = await dbConnection();
  const customerId = session.customer as string;
  const customer = await stripe.customers.retrieve(customerId);
  const priceId = session.line_items?.data[0].price?.id;
  if ("email" in customer && priceId) {
    const { email, name } = customer;
    await createorUpdateUser({
      sql: sql,
      email: email!,
      fullName: name!,
      customerId,
      priceId: priceId!,
      status: "active",
    });
    await createPayments({
      session,
      sql: sql,
      priceId: priceId!,
      user_email: email!,
    });
  }
}
export async function handelStripeSubscriptionDeleted(
  stripe: Stripe,
  subscriptionId: String,
) {
  const subscription = await stripe.subscriptions.retrieve(
    subscriptionId as string,
  );
  const sql = await dbConnection();

  await sql`
    UPDATE users 
    SET status='cancelled'
    WHERE customer_id=${subscription.customer}
  `;
}
async function createorUpdateUser({
  sql,
  email,
  fullName,
  customerId,
  priceId,
  status,
}: {
  sql: any;
  email: string;
  fullName: string;
  customerId: string;
  priceId: string;
  status: string;
}) {
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (user.length === 0) {
      await sql`INSERT INTO users (email,full_name,customer_id ,price_id, status) VALUES (${email},${fullName},${customerId},${priceId}, ${status})`;
    } else {
      await sql`
    UPDATE users 
    SET customer_id=${customerId}, price_id=${priceId}, status=${status}
    WHERE email=${email}
  `;
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
  }
}

async function createPayments({
  session,
  sql,
  priceId,
  user_email,
}: {
  session: Stripe.Checkout.Session;
  sql: any;
  priceId: string;
  user_email: string;
}) {
  try {
    const { amount_total, id, status } = session;
    await sql`INSERT INTO payments (amount,stripe_payment_id, price_id, status,user_email) VALUES (${amount_total}, ${id}, ${priceId}, ${status}, ${user_email})`;
  } catch (error) {
    console.log("Error creating payment record:", error);
  }
}
