import React from "react";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
type priceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};
const plans = [
  {
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority suppport",
      "Markdown Export",
    ],
    id: "pro",
    paymentLink: "",
    priceId: "",
  },
  {
    name: "basic",
    price: 9,
    description: "For professionals and teams",
    items: [
      "5 PDF summary per month",
      "standered processing speed",
      "email suppport",
    ],
    id: "basic",
    paymentLink: "",
    priceId: "",
  },
];
const PricingSection = () => {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 bg-gray-50">
        {plans.map((item, idx) => {
          return (
            <div key={idx}>
              <PriceCard key={idx} {...item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
const PriceCard = ({
  name,
  price,
  description,
  items,
  paymentLink,
  priceId,
}: priceType) => {
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
      <div>
        {items.map((item, idx) => (
          <div key={idx}>
            <li>{item}</li>
            <CheckIcon />
          </div>
        ))}
      </div>
      <Link href={paymentLink}>Buy Now</Link>
    </div>
  );
};
export default PricingSection;
