"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Smartphone,
} from "lucide-react";

import { settingsData } from "../mock/settings.mock";

export function SecuritySettings() {
  const { security } = settingsData;

  const [twoFactor, setTwoFactor] = useState(
    security.twoFactorEnabled
  );

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
        <ShieldCheck className="h-7 w-7 text-green-600" />

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Security
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Protect your Orvessa AI account.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Two Factor */}
        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
            transition
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          <div className="flex items-start gap-4">
            <Smartphone className="mt-1 h-6 w-6 text-green-600" />

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Two-Factor Authentication
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Add an extra layer of security to your account by requiring a verification code.
              </p>
            </div>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setTwoFactor(!twoFactor)}
            className={`relative h-7 w-14 rounded-full transition ${
              twoFactor
                ? "bg-green-600"
                : "bg-slate-300 dark:bg-slate-600"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                twoFactor
                  ? "left-8"
                  : "left-1"
              }`}
            />
          </button>
        </div>

        {/* Password */}
        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
            transition
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          <div className="flex items-start gap-4">
            <Lock className="mt-1 h-6 w-6 text-indigo-600" />

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Password
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Update your password regularly to keep your account secure.
              </p>
            </div>
          </div>

          <button
            className="
              rounded-xl
              bg-slate-900
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-slate-800
              dark:bg-indigo-600
              dark:hover:bg-indigo-500
            "
          >
            Change Password
          </button>
        </div>

        {/* Login Sessions */}
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
            dark:border-slate-700
            dark:bg-slate-800
          "
        >
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Active Sessions
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            You're currently signed in on this device.
          </p>

          <div className="mt-4 rounded-xl bg-green-100 px-4 py-3 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
            ✅ Current Device • MacBook Air • Active Now
          </div>
        </div>
      </div>
    </div>
  );
}