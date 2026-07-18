import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
}

export function StatCard({
  title,
  value,
  change,
  icon,
}: StatCardProps) {
  return (
    <div
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
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
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
            dark:text-white
          "
        >
          {icon}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2">
        <ArrowUpRight className="h-4 w-4 text-green-600" />

        <span className="text-sm font-semibold text-green-600">
          {change}
        </span>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          vs last month
        </span>
      </div>
    </div>
  );
}