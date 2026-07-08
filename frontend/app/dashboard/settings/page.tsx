"use client";

import { AccountSettings } from "@/features/settings/components/account-settings";
import { AppearanceSettings } from "@/features/settings/components/appearance-settings";
import { NotificationSettings } from "@/features/settings/components/notification-settings";
import { SecuritySettings } from "@/features/settings/components/security-settings";
import { DangerZone } from "@/features/settings/components/danger-zone";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your account preferences and application settings.
        </p>
      </div>

      <AppearanceSettings />

      <NotificationSettings />

      <SecuritySettings />

      <AccountSettings />

      <DangerZone />
    </div>
  );
}