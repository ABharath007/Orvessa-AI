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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-100 p-3">
          {icon}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ArrowUpRight className="h-4 w-4 text-green-600" />

        <span className="text-sm font-medium text-green-600">
          {change}
        </span>

        <span className="text-sm text-slate-500">
          vs last month
        </span>
      </div>
    </div>
  );
}