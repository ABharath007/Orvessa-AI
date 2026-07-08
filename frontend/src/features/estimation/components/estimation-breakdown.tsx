"use client";

import { estimationData } from "../mock/estimation.mock";
import { EstimationCard } from "./estimation-card";

export function EstimationBreakdown() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Cost Breakdown
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {estimationData.items.map((item) => (
          <EstimationCard
            key={item.id}
            title={item.category}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  );
}