import { currentUser } from "@clerk/nextjs/server";
import Navbar from "../navbar/Navbar";
import { getPriceId } from "@/lib/getPriceId";
import { plans } from "@/lib/planPricing";

export default async function Header() {
  const user = await currentUser();
  // if (!user?.id) return null;
  const email = user?.emailAddresses[0]?.emailAddress;
  let priceId: string | null = null;
  if (email) {
    priceId = await getPriceId(email);
  }
  let planName: String = "Buy a plan";
  const plan = plans.find((p) => p.priceId === priceId);
  if (plan) {
    planName = plan.name;
  }

  console.log("User's plan:", email, priceId, planName);
  return (
    <>
      <Navbar plan={planName} />
    </>
  );
}
