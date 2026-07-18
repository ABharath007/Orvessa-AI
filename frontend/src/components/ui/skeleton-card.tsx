import { DashboardCard } from "./dashboard-card";

export function SkeletonCard() {
  return (
    <DashboardCard>
      <div className="animate-pulse">
        <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="mt-5 h-10 w-40 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="mt-6 h-3 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="mt-3 h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
    </DashboardCard>
  );
}