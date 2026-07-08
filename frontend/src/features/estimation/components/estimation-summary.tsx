"use client";

import { estimationData } from "../mock/estimation.mock";
import { Download, Save } from "lucide-react";

export function EstimationSummary() {
  const total = estimationData.items.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const average = Math.round(
    total / estimationData.items.length
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Estimation Summary
      </h2>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm text-slate-500">
            Total Estimated Cost
          </p>

          <h3 className="mt-2 text-4xl font-bold text-indigo-600">
            ₹{total.toLocaleString()}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Average Category Cost
          </p>

          <h4 className="mt-1 text-2xl font-semibold">
            ₹{average.toLocaleString()}
          </h4>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-white transition hover:bg-indigo-700">
            <Download className="h-5 w-5" />
            Download
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 transition hover:bg-slate-100">
            <Save className="h-5 w-5" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}