"use client";

import {
  Crown,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import { currentPlan } from "../mock/subscription.mock";

export function CurrentPlanCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Current Plan
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {currentPlan.name}
          </h2>

          <p className="mt-2 text-lg font-medium text-indigo-600">
            ₹{currentPlan.price} / {currentPlan.billingCycle}
          </p>
        </div>

        <div className="rounded-2xl bg-indigo-100 p-4 dark:bg-indigo-900/40">
          <Crown className="h-8 w-8 text-indigo-600" />
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="flex items-center gap-3">
          <BadgeCheck className="h-5 w-5 text-emerald-500" />

          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Status
            </p>

            <p className="font-semibold text-slate-900 dark:text-white">
              {currentPlan.status}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-indigo-500" />

          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Next Renewal
            </p>

            <p className="font-semibold text-slate-900 dark:text-white">
              {currentPlan.renewalDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
