import { SidebarLogo } from "./sidebar-logo";
import { SidebarNav } from "./sidebar-nav";

export function DashboardSidebar() {
  return (
    <aside
      className="
        hidden
        w-72
        border-r
        border-slate-200
        bg-white
        transition-colors
        duration-300
        dark:border-slate-800
        dark:bg-slate-900
        lg:flex
        lg:flex-col
      "
    >
      <SidebarLogo />

      <SidebarNav />
    </aside>
  );
}