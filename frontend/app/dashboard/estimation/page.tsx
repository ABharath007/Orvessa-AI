"use client";

import { EstimationBreakdown } from "@/features/estimation/components/estimation-breakdown";
import { EstimationSummary } from "@/features/estimation/components/estimation-summary";
import { EstimationChart } from "@/features/estimation/components/estimation-chart";

export default function EstimationPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          Cost Estimation
        </h1>

        <p
          className="
            max-w-3xl
            text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          AI-powered renovation cost estimation that helps you understand
          furniture, materials, labor, and overall interior design expenses.
        </p>
      </section>

      {/* Cost Breakdown */}
      <EstimationBreakdown />

      {/* Summary + Chart */}
      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <EstimationSummary />
        </div>

        <div className="lg:col-span-2">
          <EstimationChart />
        </div>
      </section>
    </div>
  );
}