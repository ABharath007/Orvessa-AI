"use client";

import { Check, Crown } from "lucide-react";

import type { PricingPlan } from "../types/subscription.types";

interface PricingCardProps {
  plan: PricingPlan;
  onUpgrade: () => void;
}

export function PricingCard({
  plan,
  onUpgrade,
}: PricingCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-slate-800
        dark:bg-slate-900
        ${
          plan.popular
            ? "border-indigo-600 ring-2 ring-indigo-600/20"
            : "border-slate-200"
        }
      `}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute right-5 top-5 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
          MOST POPULAR
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-indigo-100 p-3 dark:bg-indigo-900/40">
          <Crown className="h-6 w-6 text-indigo-600" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {plan.name}
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {plan.description}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-8">
        <span className="text-5xl font-bold text-slate-900 dark:text-white">
          ₹{plan.price}
        </span>

        <span className="ml-2 text-slate-500 dark:text-slate-400">
          / {plan.billingCycle}
        </span>
      </div>

      {/* Features */}
      <div className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-emerald-500" />

            <span className="text-slate-700 dark:text-slate-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
  onClick={() => {
    if (!plan.current) {
      onUpgrade();
    }
  }}
  disabled={plan.current}
  className={`
    mt-10
    w-full
    rounded-xl
    py-3
    font-semibold
    transition-all
    duration-300

    ${
      plan.current
        ? "cursor-default bg-emerald-600 text-white"
        : plan.popular
        ? "bg-indigo-600 text-white hover:bg-indigo-700"
        : "border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-white"
    }
  `}
>
  {plan.current
    ? "Current Plan"
    : plan.name === "Business"
    ? "Upgrade to Business"
    : "Upgrade to Pro"}
</button>
    </div>
  );
}