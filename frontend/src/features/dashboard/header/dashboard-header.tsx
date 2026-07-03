"use client";

import { SearchBar } from "./search-bar";
import { Notifications } from "./notifications";
import { UserMenu } from "./user-menu";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      {/* Left Section */}
      <div className="flex flex-1 items-center">
        <SearchBar />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <Notifications />

        <UserMenu />
      </div>
    </header>
  );
}