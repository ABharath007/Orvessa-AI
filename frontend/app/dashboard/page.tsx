import { FadeIn } from "@/components/animations/fade-in";
import { SlideUp } from "@/components/animations/slide-up";
import { PageTransition } from "@/components/animations/page-transition";

import { StatsGrid } from "@/features/dashboard/components/stats-grid";
import { QuickActions } from "@/features/dashboard/components/quick-actions";
import { RecentActivity } from "@/features/dashboard/components/recent-activity";
import { AnalyticsChart } from "@/features/dashboard/components/analytics-chart";
import { RecentProjects } from "@/features/dashboard/components/recent-projects";

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="space-y-10">
        {/* Welcome */}
        <FadeIn>
          <section className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">
                Welcome Back 👋
              </h1>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Here's what's happening in your workspace today.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Live Statistics */}
        <SlideUp delay={0.1}>
          <StatsGrid />
        </SlideUp>

        {/* Live Analytics */}
        <SlideUp delay={0.2}>
          <AnalyticsChart />
        </SlideUp>

        {/* Bottom Dashboard */}
        <div className="grid gap-8 xl:grid-cols-3">
          {/* Left Side */}
          <div className="space-y-8 xl:col-span-2">
            <SlideUp delay={0.3}>
              <QuickActions />
            </SlideUp>

            <SlideUp delay={0.4}>
              <RecentProjects />
            </SlideUp>
          </div>

          {/* Right Side */}
          <SlideUp delay={0.5}>
            <RecentActivity />
          </SlideUp>
        </div>
      </div>
    </PageTransition>
  );
}