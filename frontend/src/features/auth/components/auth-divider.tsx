"use client";

import { Separator } from "@/components/ui/separator";

export function AuthDivider() {
  return (
    <div className="flex items-center gap-4">
      <Separator className="flex-1 bg-slate-200 dark:bg-slate-700" />

      <span
        className="
          text-sm
          font-medium
          text-slate-500
          dark:text-slate-400
        "
      >
        OR
      </span>

      <Separator className="flex-1 bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}