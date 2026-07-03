import { SidebarLogo } from "./sidebar-logo";
import { SidebarNav } from "./sidebar-nav";

export function DashboardSidebar() {
  return (
    <aside className="hidden w-72 border-r bg-white lg:flex lg:flex-col">
      <SidebarLogo />

      <SidebarNav />
    </aside>
  );
}