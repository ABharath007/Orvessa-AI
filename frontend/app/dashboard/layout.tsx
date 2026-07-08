import type { ReactNode } from "react";

import { DashboardSidebar } from "@/features/dashboard/sidebar/sidebar";
import { DashboardHeader } from "@/features/dashboard/header/dashboard-header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden border-r border-slate-200 bg-white lg:block">
        <DashboardSidebar />
      </aside>

      {/* Main Layout */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}