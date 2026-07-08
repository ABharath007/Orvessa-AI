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
  "#4F46E5",
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export function EstimationChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Budget Distribution
      </h2>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={estimationData.items}
              dataKey="amount"
              nameKey="category"
              outerRadius={120}
              label
            >
              {estimationData.items.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}