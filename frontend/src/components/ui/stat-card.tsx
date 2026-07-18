import type { ReactNode } from "react";

import { DashboardCard } from "./dashboard-card";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <DashboardCard>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-2 text-sm text-emerald-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-indigo-100 p-4 dark:bg-indigo-900/30">
          {icon}
        </div>
      </div>
    </DashboardCard>
  );
}