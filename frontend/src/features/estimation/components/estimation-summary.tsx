"use client";

import {
  Download,
  Save,
} from "lucide-react";

import { estimationData } from "../mock/estimation.mock";

export function EstimationSummary() {
  const total = estimationData.items.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const average = Math.round(
    total / estimationData.items.length
  );

  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div>
        <h2
          className="
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Estimation Summary
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          AI-generated renovation budget overview.
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-8 space-y-8">
        {/* Total Cost */}
        <div
          className="
            rounded-2xl
            bg-indigo-50
            p-5
            dark:bg-indigo-900/20
          "
        >
          <p
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Total Estimated Cost
          </p>

          <h3
            className="
              mt-2
              text-4xl
              font-bold
              text-indigo-600
              dark:text-indigo-400
            "
          >
            ₹{total.toLocaleString("en-IN")}
          </h3>
        </div>

        {/* Average */}
        <div
          className="
            rounded-2xl
            bg-slate-50
            p-5
            dark:bg-slate-800
          "
        >
          <p
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Average Category Cost
          </p>

          <h4
            className="
              mt-2
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            ₹{average.toLocaleString("en-IN")}
          </h4>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-indigo-600
              px-5
              py-3
              font-semibold
              text-white
              transition-all
              hover:bg-indigo-700
              hover:shadow-lg
            "
          >
            <Download className="h-5 w-5" />
            Download
          </button>

          <button
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-5
              py-3
              font-semibold
              text-slate-700
              transition-all
              hover:bg-slate-100
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              dark:hover:bg-slate-700
            "
          >
            <Save className="h-5 w-5" />
            Save
          </button>
        </div>
      </div>
    </section>
  );
}