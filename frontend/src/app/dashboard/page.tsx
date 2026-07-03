import { StatsGrid } from "@/features/dashboard/components/stats-grid";
import { QuickActions } from "@/features/dashboard/components/quick-actions";
import { RecentActivity } from "@/features/dashboard/components/recent-activity";
import { AnalyticsChart } from "@/features/dashboard/components/analytics-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Welcome */}
      <section>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's what's happening in your workspace today.
        </p>
      </section>

      {/* Stats */}
      <StatsGrid />

      {/* Analytics */}
      <AnalyticsChart />

      {/* Bottom Section */}
      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <QuickActions />
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}