export type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

export const plans: PriceType[] = [
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
    paymentLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_4gMeVd0xK5484Xv8mU4ko00"
        : "https://buy.stripe.com/test_4gMeVd0xK5484Xv8mU4ko00",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1TF8S6FR5foVDthnkWjMfiVY"
        : "price_1TF8S6FR5foVDthnkWjMfiVY",
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
    paymentLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_00wbJ12FSaos0Hfav24ko01"
        : "https://buy.stripe.com/test_00wbJ12FSaos0Hfav24ko01",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1TFALrFR5foVDthn9EJCs3Uu"
        : "price_1TFALrFR5foVDthn9EJCs3Uu",
  },
];
