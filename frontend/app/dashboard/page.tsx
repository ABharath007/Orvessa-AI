import { StatsGrid } from "@/features/dashboard/components/stats-grid";
import { QuickActions } from "@/features/dashboard/components/quick-actions";
import { RecentActivity } from "@/features/dashboard/components/recent-activity";
import { AnalyticsChart } from "@/features/dashboard/components/analytics-chart";
import { RecentProjects } from "@/features/dashboard/components/recent-projects";
import { LogoutButton } from "@/features/auth/components/logout-button";
export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Welcome */}
      <section className="flex items-center justify-between">
  <div>
    <h1 className="text-4xl font-bold">
      Welcome Back 👋
    </h1>

    <p className="mt-2 text-slate-500">
      Here's what's happening in your workspace today.
    </p>
  </div>

  <LogoutButton />
</section>

      {/* Live Statistics */}
      <StatsGrid />

      {/* Live Analytics */}
      <AnalyticsChart />

      {/* Bottom Dashboard */}
      <div className="grid gap-8 xl:grid-cols-3">
        {/* Left Side */}
        <div className="space-y-8 xl:col-span-2">
          <QuickActions />

          <RecentProjects />
        </div>

        {/* Right Side */}
        <RecentActivity />
      </div>
    </div>
  );
}