"use client";

import { useState } from "react";

import { pricingPlans } from "../mock/subscription.mock";
import { PricingCard } from "./pricing-card";
import { UpgradeDialog } from "./upgrade-dialog";

export function PricingGrid() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold dark:text-white">
            Pricing Plans
          </h2>

          <p className="mt-2 text-slate-500">
            Choose the perfect plan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onUpgrade={() => setOpen(true)}
            />
          ))}
        </div>
      </div>

      <UpgradeDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}