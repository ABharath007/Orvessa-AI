"use client";

import { EstimationBreakdown } from "@/features/estimation/components/estimation-breakdown";
import { EstimationSummary } from "@/features/estimation/components/estimation-summary";
import { EstimationChart } from "@/features/estimation/components/estimation-chart";

export default function EstimationPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Cost Estimation
        </h1>

        <p className="mt-2 text-slate-500">
          AI-powered renovation cost estimation for your interior design.
        </p>
      </div>

      {/* Cost Breakdown */}
      <EstimationBreakdown />

      {/* Summary + Chart */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <EstimationSummary />
        </div>

        <div className="lg:col-span-2">
          <EstimationChart />
        </div>
      </div>
    </div>
  );
}