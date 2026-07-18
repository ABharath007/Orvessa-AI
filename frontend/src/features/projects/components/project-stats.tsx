"use client";

import {
  FolderOpen,
  CheckCircle2,
  Clock3,
  IndianRupee,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12%",
    icon: FolderOpen,
    color: "text-blue-600",
  },
  {
    title: "Completed",
    value: "18",
    change: "+8%",
    icon: CheckCircle2,
    color: "text-green-600",
  },
  {
    title: "In Progress",
    value: "6",
    change: "+5%",
    icon: Clock3,
    color: "text-amber-600",
  },
  {
    title: "Total Budget",
    value: "₹8.2L",
    change: "+18%",
    icon: IndianRupee,
    color: "text-purple-600",
  },
];

export function ProjectStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h2>
              </div>

              {/* Icon */}
              <div
                className="
                  rounded-2xl
                  bg-slate-100
                  p-3
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-indigo-100
                  dark:bg-slate-800
                  dark:group-hover:bg-indigo-600
                "
              >
                <Icon
                  className={`h-6 w-6 ${item.color} dark:text-white`}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-green-600" />

              <span className="text-sm font-semibold text-green-600">
                {item.change}
              </span>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                vs last month
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}