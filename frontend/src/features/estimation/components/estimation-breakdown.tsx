"use client";

import { estimationData } from "../mock/estimation.mock";
import { EstimationCard } from "./estimation-card";

export function EstimationBreakdown() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div>
        <h2
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          Cost Breakdown
        </h2>

        <p
          className="
            mt-2
            text-slate-500
            dark:text-slate-400
          "
        >
          Estimated expenses categorized by renovation components.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          grid
          gap-8
          sm:grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          animate-in
          fade-in
          duration-500
        "
      >
        {estimationData.items.map((item) => (
          <EstimationCard
            key={item.id}
            title={item.category}
            amount={item.amount}
          />
        ))}
      </div>
    </section>
  );
}