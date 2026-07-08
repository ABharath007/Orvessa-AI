"use client";

import { AlertTriangle } from "lucide-react";

export function DangerZone() {
  return (
    <div className="rounded-2xl border border-red-300 bg-red-50 p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <AlertTriangle className="h-6 w-6 text-red-600" />

        <h2 className="text-2xl font-bold text-red-600">
          Danger Zone
        </h2>
      </div>

      <p className="mb-6 text-slate-600">
        These actions are permanent and cannot be undone.
      </p>

      <button className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700">
        Delete Account
      </button>
    </div>
  );
}