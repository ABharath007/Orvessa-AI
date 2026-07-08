"use client";

import { ShieldCheck } from "lucide-react";
import { settingsData } from "../mock/settings.mock";

export function SecuritySettings() {
  const { security } = settingsData;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-green-600" />

        <h2 className="text-2xl font-bold">
          Security
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">
              Two-Factor Authentication
            </h3>

            <p className="text-sm text-slate-500">
              Add an extra layer of security to your account.
            </p>
          </div>

          <input
            type="checkbox"
            checked={security.twoFactorEnabled}
            readOnly
            className="h-5 w-5"
          />
        </div>

        <button className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800">
          Change Password
        </button>
      </div>
    </div>
  );
}