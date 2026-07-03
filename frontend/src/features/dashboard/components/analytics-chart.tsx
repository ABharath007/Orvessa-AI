"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", designs: 18 },
  { month: "Feb", designs: 28 },
  { month: "Mar", designs: 35 },
  { month: "Apr", designs: 48 },
  { month: "May", designs: 72 },
  { month: "Jun", designs: 96 },
];

export function AnalyticsChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          AI Design Analytics
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Interior designs generated over the last 6 months
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="designs"
              stroke="#0f172a"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}