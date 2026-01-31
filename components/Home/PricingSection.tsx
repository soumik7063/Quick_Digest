import React from "react";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import Particles from "../ui/Particles";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const plans: PriceType[] = [
  {
    name: "Basic",
    price: 9,
    description: "Perfect for individuals getting started",
    items: [
      "5 PDF summaries / month",
      "Standard processing speed",
      "Email support",
    ],
    id: "basic",
    paymentLink: "#",
    priceId: "",
  },
  {
    name: "Pro",
    price: 19,
    description: "Best for professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown export",
    ],
    id: "pro",
    paymentLink: "#",
    priceId: "",
  },
];

const PricingSection = () => {
  return (
    <div>
      <div className="h-screen w-full absolute">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <section className=" bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-white/10 text-gray-300">
              💳 Pricing
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Simple, Transparent
              <span className="block text-indigo-400">Pricing Plans</span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
              Choose a plan that fits your needs. Upgrade or cancel anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {plans.map((plan) => (
              <PriceCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PriceCard = ({
  name,
  price,
  description,
  items,
  paymentLink,
}: PriceType) => {
  const isPro = name.toLowerCase() === "pro";

  return (
    <div>
      <div className="h-screen w-full absolute">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          // moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div
        className={`relative rounded-2xl border p-8 transition 
        ${
          isPro
            ? "border-indigo-500 bg-indigo-500/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        {isPro && (
          <span
            className="absolute -top-3 left-1/2 -translate-x-1/2 
                         bg-indigo-500 text-white text-xs font-semibold 
                         px-3 py-1 rounded-full"
          >
            Most Popular
          </span>
        )}

        {/* Header */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Price */}
        <div className="flex justify-center items-baseline mb-8">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400 ml-2">/ month</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm">
              <CheckIcon className="text-indigo-400" size={18} />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={paymentLink}
          className={`block text-center w-full py-3 rounded-lg font-medium transition
          ${
            isPro
              ? "bg-indigo-500 hover:bg-indigo-600 text-white"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;
