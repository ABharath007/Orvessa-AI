"use client";

import {
  FolderOpen,
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    icon: FolderOpen,
  },
  {
    title: "Completed",
    value: "18",
    icon: CheckCircle2,
  },
  {
    title: "In Progress",
    value: "6",
    icon: Clock3,
  },
  {
    title: "Total Budget",
    value: "₹8.2L",
    icon: IndianRupee,
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
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>
              </div>

              <div className="rounded-xl bg-slate-100 p-3">
                <Icon className="h-6 w-6 text-slate-700" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}