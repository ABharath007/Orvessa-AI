"use client";

import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  CreditCard,
  ChevronRight,
} from "lucide-react";

export function AccountSettings() {
  const router = useRouter();

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
        <User className="h-7 w-7 text-blue-600" />

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Account
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your account information and preferences.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Edit Profile */}
        <button
          onClick={() => router.push("/dashboard/profile")}
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-6
            py-5
            transition
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          <div className="flex items-center gap-4">
            <User className="h-6 w-6 text-blue-600" />

            <div className="text-left">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Edit Profile
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Update your personal information.
              </p>
            </div>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>

        {/* Change Email */}
        <button
          onClick={() => alert("Coming Soon")}
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-6
            py-5
            transition
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-green-600" />

            <div className="text-left">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Change Email
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Update your email address.
              </p>
            </div>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>

        {/* Subscription */}
        <button
          onClick={() => alert("Subscription page coming soon")}
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            px-6
            py-5
            transition
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          <div className="flex items-center gap-4">
            <CreditCard className="h-6 w-6 text-purple-600" />

            <div className="text-left">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Manage Subscription
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                View and manage your current plan.
              </p>
            </div>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>
      </div>
    </div>
  );
}