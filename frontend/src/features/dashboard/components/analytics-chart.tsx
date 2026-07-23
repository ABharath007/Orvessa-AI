"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { useDashboard } from "../hooks/use-dashboard";

const COLORS = [
  "#6366f1",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
];

export function AnalyticsChart() {
  const { projects } = useDashboard();

  const roomMap = new Map<string, number>();

  projects.forEach((project) => {
    roomMap.set(
      project.roomType,
      (roomMap.get(project.roomType) ?? 0) + 1
    );
  });

  const roomData = Array.from(roomMap.entries()).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const monthMap = new Map<string, number>();

  projects.forEach((project) => {
    const month = new Date(project.createdAt).toLocaleString(
      "default",
      {
        month: "short",
      }
    );

    monthMap.set(
      month,
      (monthMap.get(month) ?? 0) + 1
    );
  });

  const chartData = Array.from(monthMap.entries()).map(
    ([month, projects]) => ({
      month,
      projects,
    })
  );

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Line Chart */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 lg:col-span-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Project Growth
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Projects created over time
        </p>

        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#334155"
              />

              <XAxis
                dataKey="month"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
              />

              <YAxis
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8" }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey="projects"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{
                  fill: "#6366f1",
                  r: 5,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Room Types
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Distribution of projects
        </p>

        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={roomData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {roomData.map((_, index) => (
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
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}