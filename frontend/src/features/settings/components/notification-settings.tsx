"use client";

import { Bell } from "lucide-react";
import { settingsData } from "../mock/settings.mock";

export function NotificationSettings() {
  const { notifications } = settingsData;

  const items = [
    {
      title: "Email Notifications",
      value: notifications.emailNotifications,
    },
    {
      title: "Push Notifications",
      value: notifications.pushNotifications,
    },
    {
      title: "Marketing Emails",
      value: notifications.marketingEmails,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Bell className="h-6 w-6 text-indigo-600" />
        <h2 className="text-2xl font-bold">
          Notifications
        </h2>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between"
          >
            <span>{item.title}</span>

            <input
              type="checkbox"
              checked={item.value}
              readOnly
              className="h-5 w-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}