import {
  handelStripeSubscriptionDeleted,
  handleStripeCheckoutSessionCompleted,
} from "@/lib/payments";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export const POST = async (req: NextRequest) => {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;

  console.log("Payload:", payload);
  console.log("Signature:", sig);
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionId = event.data.object.id as string;
        const session = await stripe.checkout.sessions.retrieve(
          checkoutSessionId,
          {
            expand: ["line_items"],
          },
        );
        await handleStripeCheckoutSessionCompleted({ session, stripe });
        console.log("Checkout session completed!", session);
        break;
      case "customer.subscription.deleted":
        const subscriptionId = event.data.object.id as String;
        await handelStripeSubscriptionDeleted(stripe, subscriptionId);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    console.log("Error verifying webhook signature:", err);
    return NextResponse.json({ error: "Webhook Error", err }, { status: 400 });
  }
  return NextResponse.json({
    status: "sucess",
  });
};
