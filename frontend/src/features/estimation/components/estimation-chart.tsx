"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { estimationData } from "../mock/estimation.mock";

const COLORS = [
  "#6366F1",
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export function EstimationChart() {
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
      <div className="mb-8">
        <h2
          className="
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Budget Distribution
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          AI breakdown of your estimated renovation budget.
        </p>
      </div>

      {/* Chart */}
      <div className="h-96">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={estimationData.items}
              dataKey="amount"
              nameKey="category"
              outerRadius={120}
              innerRadius={55}
              paddingAngle={4}
              label
            >
              {estimationData.items.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#ffffff",
              }}
              labelStyle={{
                color: "#ffffff",
              }}
              itemStyle={{
                color: "#ffffff",
              }}
            />

            <Legend
              wrapperStyle={{
                color: "#64748b",
                paddingTop: 20,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}