"use client";

import Image from "next/image";
import { Settings } from "lucide-react";

import { SearchBar } from "@/features/search/components/search-bar";
import { NotificationBell } from "@/features/notifications/components/notification-bell";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
      {/* Left */}
      <div className="flex-1">
        <SearchBar />\
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <NotificationBell />

        <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
          <Settings className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <Image
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div className="hidden md:block">
            <h4 className="font-semibold">
              Kiran
            </h4>

            <p className="text-xs text-slate-500">
              AI Designer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}