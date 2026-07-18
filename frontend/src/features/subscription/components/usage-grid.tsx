"use client";

import { usageData } from "../mock/subscription.mock";
import { UsageCard } from "./usage-card";

export function UsageGrid() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Usage Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {usageData.map((item) => (
          <UsageCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}