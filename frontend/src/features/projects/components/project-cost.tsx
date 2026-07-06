"use client";

import { IndianRupee } from "lucide-react";
import { mockCost } from "../mock/cost.mock";

export function ProjectCost() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        Estimated Project Cost
      </h2>

      <p className="mt-2 text-slate-500">
        AI-estimated renovation budget.
      </p>

      <div className="mt-8 space-y-4">
        {mockCost.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
          >
            <span>{item.category}</span>

            <span className="flex items-center gap-1 font-semibold">
              <IndianRupee className="h-4 w-4" />
              {item.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-xl bg-slate-900 p-6 text-white">
        <span className="text-xl font-semibold">
          Estimated Total
        </span>

        <span className="flex items-center gap-2 text-3xl font-bold">
          <IndianRupee className="h-7 w-7" />
          {mockCost.total.toLocaleString()}
        </span>
      </div>
    </section>
  );
}

