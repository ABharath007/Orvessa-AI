"use client";

import { User } from "lucide-react";

export function AccountSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <User className="h-6 w-6 text-blue-600" />

        <h2 className="text-2xl font-bold">
          Account
        </h2>
      </div>

      <div className="space-y-5">
        <button className="w-full rounded-xl border border-slate-300 px-6 py-3 text-left transition hover:bg-slate-100">
          Edit Profile
        </button>

        <button className="w-full rounded-xl border border-slate-300 px-6 py-3 text-left transition hover:bg-slate-100">
          Change Email
        </button>

        <button className="w-full rounded-xl border border-slate-300 px-6 py-3 text-left transition hover:bg-slate-100">
          Manage Subscription
        </button>
      </div>
    </div>
  );
}