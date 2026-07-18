"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { settingsData } from "../mock/settings.mock";

export function AppearanceSettings() {
  const { appearance } = settingsData;

  const { theme, setTheme } = useTheme();

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
      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        Appearance
      </h2>

      <div className="space-y-8">
        {/* Theme */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Theme
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Choose your preferred appearance.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTheme("light")}
              className={`rounded-xl border p-3 transition-all ${
                theme === "light"
                  ? "border-indigo-600 bg-indigo-50 text-indigo-600 dark:bg-indigo-600 dark:text-white"
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
              }`}
            >
              <Sun className="h-5 w-5" />
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`rounded-xl border p-3 transition-all ${
                theme === "dark"
                  ? "border-indigo-600 bg-indigo-50 text-indigo-600 dark:bg-indigo-600 dark:text-white"
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
              }`}
            >
              <Moon className="h-5 w-5" />
            </button>

            <button
              onClick={() => setTheme("system")}
              className={`rounded-xl border p-3 transition-all ${
                theme === "system"
                  ? "border-indigo-600 bg-indigo-50 text-indigo-600 dark:bg-indigo-600 dark:text-white"
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
              }`}
            >
              <Monitor className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Language
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Select your preferred language.
            </p>
          </div>

          <select
            defaultValue={appearance.language}
            className="
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-2
              text-slate-900
              transition
              focus:border-indigo-500
              focus:outline-none
              dark:border-slate-600
              dark:bg-slate-800
              dark:text-white
            "
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