"use client";

import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function RememberMe() {
  return (
    <div className="flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Checkbox
          id="remember"
          className="
            border-slate-300
            data-[state=checked]:bg-indigo-600
            data-[state=checked]:border-indigo-600
            dark:border-slate-600
          "
        />

        <Label
          htmlFor="remember"
          className="
            cursor-pointer
            text-sm
            font-medium
            text-slate-600
            transition-colors
            hover:text-slate-900
            dark:text-slate-300
            dark:hover:text-white
          "
        >
          Remember me
        </Label>
      </div>

      {/* Right */}
      <Link
        href="/auth/forgot-password"
        className="
          text-sm
          font-semibold
          text-indigo-600
          transition-colors
          hover:text-indigo-700
          hover:underline
          dark:text-indigo-400
          dark:hover:text-indigo-300
        "
      >
        Forgot Password?
      </Link>
    </div>
  );
}