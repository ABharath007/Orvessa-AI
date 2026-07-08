"use client";

import { Bell } from "lucide-react";

import type { Notification } from "../types/notifications.types";

interface NotificationItemProps {
  notification: Notification;
}

export function NotificationItem({
  notification,
}: NotificationItemProps) {
  return (
    <div
      className={`rounded-xl border p-4 transition-all duration-300 hover:shadow-md ${
        notification.read
          ? "border-slate-200 bg-white"
          : "border-indigo-200 bg-indigo-50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-indigo-100 p-2">
          <Bell className="h-4 w-4 text-indigo-600" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold">
            {notification.title}
          </h4>

          <p className="mt-1 text-sm text-slate-500">
            {notification.description}
          </p>

          <p className="mt-2 text-xs text-slate-400">
            {notification.time}
          </p>
        </div>

        {!notification.read && (
          <span className="mt-1 h-3 w-3 rounded-full bg-indigo-600" />
        )}
      </div>
    </div>
  );
}