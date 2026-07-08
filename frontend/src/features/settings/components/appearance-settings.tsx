"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { settingsData } from "../mock/settings.mock";

export function AppearanceSettings() {
  const { appearance } = settingsData;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Appearance
      </h2>

      <div className="space-y-6">
        {/* Theme */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">
              Theme
            </h3>

            <p className="text-sm text-slate-500">
              Choose your preferred appearance.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="rounded-xl border border-slate-300 p-3 hover:bg-slate-100">
              <Sun className="h-5 w-5" />
            </button>

            <button className="rounded-xl border border-slate-300 p-3 hover:bg-slate-100">
              <Moon className="h-5 w-5" />
            </button>

            <button className="rounded-xl border border-indigo-600 bg-indigo-50 p-3">
              <Monitor className="h-5 w-5 text-indigo-600" />
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">
              Language
            </h3>

            <p className="text-sm text-slate-500">
              Current language
            </p>
          </div>

          <select
            defaultValue={appearance.language}
            className="rounded-xl border border-slate-300 px-4 py-2"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
          </select>
        </div>
      </div>
    </div>
  );
}