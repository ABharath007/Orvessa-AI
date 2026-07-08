"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

import { NotificationDropdown } from "./notification-dropdown";

export function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100"
      >
        <Bell className="h-5 w-5" />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          3
        </span>
      </button>

      {open && <NotificationDropdown />}
    </div>
  );
}