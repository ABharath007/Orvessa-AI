import type { ReactNode } from "react";

import { DashboardSidebar } from "@/features/dashboard/sidebar/sidebar";
import { DashboardHeader } from "@/features/dashboard/header/dashboard-header";
import { CommandPalette } from "@/components/layouts/command-palette";
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="hidden border-r border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 lg:block">
        <DashboardSidebar />
      </aside>

      {/* Main Layout */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-6 transition-colors duration-300 dark:bg-slate-950 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>

        {/* Global Command Palette */}
      </div>
    </div>
  );
}