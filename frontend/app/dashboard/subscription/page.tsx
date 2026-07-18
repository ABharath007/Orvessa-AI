"use client";

import { CurrentPlanCard } from "@/features/subscription/components/current-plan-card";
import { UsageGrid } from "@/features/subscription/components/usage-grid";
import { PaymentMethod } from "@/features/subscription/components/payment-method";
import { BillingHistory } from "@/features/subscription/components/billing-history";
import { PricingGrid } from "@/features/subscription/components/pricing-grid";
import { FeatureComparison } from "@/features/subscription/components/feature-comparison";
import { FAQ } from "@/features/subscription/components/faq";

export default function SubscriptionPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Subscription
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage your subscription, billing and AI usage.
        </p>
      </div>

      {/* Current Plan */}
      <CurrentPlanCard />

      {/* Usage Overview */}
      <UsageGrid />

      {/* Payment Method */}
      <PaymentMethod />

      {/* Billing History */}
      <BillingHistory />

      {/* Pricing Plans */}
      <PricingGrid />

      {/* Feature Comparison */}
      <FeatureComparison />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}