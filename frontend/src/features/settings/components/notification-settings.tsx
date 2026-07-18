"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

import { settingsData } from "../mock/settings.mock";

export function NotificationSettings() {
  const { notifications } = settingsData;

  const [emailNotifications, setEmailNotifications] = useState(
    notifications.emailNotifications
  );

  const [pushNotifications, setPushNotifications] = useState(
    notifications.pushNotifications
  );

  const [marketingEmails, setMarketingEmails] = useState(
    notifications.marketingEmails
  );

  const items = [
    {
      title: "Email Notifications",
      description: "Receive important account and project updates by email.",
      value: emailNotifications,
      setter: setEmailNotifications,
    },
    {
      title: "Push Notifications",
      description: "Receive browser notifications for project activity.",
      value: pushNotifications,
      setter: setPushNotifications,
    },
    {
      title: "Marketing Emails",
      description: "Receive news, feature updates and product announcements.",
      value: marketingEmails,
      setter: setMarketingEmails,
    },
  ];

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <Bell className="h-6 w-6 text-indigo-600" />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Notifications
        </h2>
      </div>

      {/* Settings */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-5
              transition-all
              duration-300
              hover:bg-slate-100
              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:bg-slate-700
            "
          >
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>

            {/* Toggle */}
            <button
              onClick={() => item.setter(!item.value)}
              className={`relative h-7 w-14 rounded-full transition ${
                item.value
                  ? "bg-indigo-600"
                  : "bg-slate-300 dark:bg-slate-600"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                  item.value
                    ? "left-8"
                    : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}