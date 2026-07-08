"use client";

import { Menu } from "lucide-react";

import { SearchBar } from "./search-bar";
import { Notifications } from "./notifications";
import { UserMenu } from "./user-menu";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-6 shadow-sm backdrop-blur-md lg:px-8">
      {/* Left Section */}
      <div className="flex flex-1 items-center gap-4">
        {/* Mobile Sidebar Button (for future responsive sidebar) */}
        <button className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>

        <div className="w-full max-w-xl">
          <SearchBar />
        </div>
      </div>

      {/* Right Section */}
      <div className="ml-6 flex items-center gap-3">
        <Notifications />

        <UserMenu />
      </div>
    </header>
  );
}