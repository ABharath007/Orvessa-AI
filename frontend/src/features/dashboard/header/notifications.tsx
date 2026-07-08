"use client";

import { useState } from "react";
import { Bell, Trash2 } from "lucide-react";

import { useNotificationStore } from "../store/notification.store";

export function Notifications() {
  const [open, setOpen] = useState(false);

  const {
    notifications,
    clearNotifications,
  } = useNotificationStore();

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-xl border border-slate-200 bg-white p-2 transition hover:bg-slate-100"
      >
        <Bell className="h-5 w-5" />

        {notifications.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-96 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 p-4">
            <h2 className="text-lg font-bold">
              Notifications
            </h2>

            {notifications.length > 0 && (
              <button
                onClick={clearNotifications}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>

          {/* Notifications */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                <Bell className="mx-auto mb-3 h-10 w-10 text-slate-300" />

                <p className="font-medium">
                  No notifications yet
                </p>

                <p className="mt-1 text-sm">
                  Create or update a project to see activity.
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="border-b border-slate-100 p-4 transition hover:bg-slate-50"
                >
                  <h3 className="font-semibold">
                    {notification.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {notification.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {notification.createdAt}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}