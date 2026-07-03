"use client";

import { Bell } from "lucide-react";

export function Notifications() {
  return (
    <button className="relative rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100">
      <Bell className="h-5 w-5" />

      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
    </button>
  );
}