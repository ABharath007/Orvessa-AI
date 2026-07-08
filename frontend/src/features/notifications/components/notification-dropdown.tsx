"use client";

import { notificationsData } from "../mock/notifications.mock";
import { NotificationItem } from "./notification-item";

export function NotificationDropdown() {
  return (
    <div className="absolute right-0 top-16 z-50 w-[420px] rounded-2xl border border-slate-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 p-5">
        <h2 className="text-xl font-bold">
          Notifications
        </h2>

        <button className="text-sm text-indigo-600 hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="max-h-[420px] space-y-3 overflow-y-auto p-5">
        {notificationsData.map((item) => (
          <NotificationItem
            key={item.id}
            notification={item}
          />
        ))}
      </div>

      <div className="border-t border-slate-200 p-4">
        <button className="w-full rounded-xl bg-slate-900 py-3 text-white transition hover:bg-slate-800">
          View All Notifications
        </button>
      </div>
    </div>
  );
}