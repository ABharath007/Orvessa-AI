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
  "#0f172a",
  "#2563eb",
  "#10b981",
  "#f59e0b",
];

export function AnalyticsChart() {
  const { projects } = useDashboard();

  // Room Type Distribution
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

  // Monthly Project Creation
  const monthMap = new Map<string, number>();

  projects.forEach((project) => {
    const month = new Date(
      project.createdAt
    ).toLocaleString("default", {
      month: "short",
    });

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
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h2 className="text-2xl font-bold">
          Project Growth
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Projects created over time
        </p>

        <div className="mt-6 h-80">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="4 4" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="projects"
                stroke="#0f172a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Room Types
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of projects
        </p>

        <div className="mt-6 h-80">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
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
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}