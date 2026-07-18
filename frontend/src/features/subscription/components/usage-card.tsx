"use client";

import type { UsageItem } from "../types/subscription.types";

interface UsageCardProps {
  item: UsageItem;
}

export function UsageCard({
  item,
}: UsageCardProps) {
  const percentage =
    (item.used / item.limit) * 100;

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {item.title}
        </h3>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {item.used}/{item.limit}
          {item.unit ? ` ${item.unit}` : ""}
        </span>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        {percentage.toFixed(0)}% Used
      </p>
    </div>
  );
}