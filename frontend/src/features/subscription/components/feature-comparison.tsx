"use client";

import { featureComparison } from "../mock/subscription.mock";
import { ComparisonRow } from "./comparison-row";

export function FeatureComparison() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Compare Plans
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Compare features across all subscription plans.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="py-4 text-left text-lg font-semibold">
                Feature
              </th>

              <th className="py-4 text-center text-lg font-semibold">
                Free
              </th>

              <th className="py-4 text-center text-lg font-semibold text-indigo-600">
                Pro
              </th>

              <th className="py-4 text-center text-lg font-semibold">
                Business
              </th>
            </tr>
          </thead>

          <tbody>
            {featureComparison.map((item) => (
              <ComparisonRow
                key={item.feature}
                feature={item.feature}
                free={item.free}
                pro={item.pro}
                business={item.business}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}