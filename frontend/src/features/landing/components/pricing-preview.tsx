"use client";

import Link from "next/link";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for getting started",
    popular: false,
    features: [
      "5 AI Designs / Month",
      "Basic Furniture Suggestions",
      "Community Support",
      "1 Active Project",
    ],
  },
  {
    name: "Pro",
    price: "₹999",
    description: "Most Popular",
    popular: true,
    features: [
      "Unlimited AI Designs",
      "Unlimited Projects",
      "Furniture Recommendations",
      "Cost Estimation",
      "HD Exports",
      "Priority Support",
    ],
  },
  {
    name: "Business",
    price: "₹2999",
    description: "For Teams & Studios",
    popular: false,
    features: [
      "Everything in Pro",
      "Team Collaboration",
      "Workspace Analytics",
      "API Ready",
      "Dedicated Support",
    ],
  },
];

export function PricingPreview() {
  return (
    <section
      id="pricing"
      className="bg-white py-28 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/40">
            Pricing
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Simple Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            Choose the perfect plan for your design journey.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-indigo-600 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              }`}
            >

              {plan.popular && (
                <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                  <Crown className="h-4 w-4" />
                  Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="ml-2 text-slate-500">
                  /month
                </span>
              </div>

              <div className="mt-10 space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-5 w-5 text-green-500" />

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <Link
                href="/auth/register"
                className={`mt-10 flex justify-center rounded-xl py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                Get Started
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}