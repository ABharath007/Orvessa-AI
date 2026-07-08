"use client";

import { CheckCircle2, Loader2 } from "lucide-react";

interface ProgressStepProps {
  title: string;
  active: boolean;
  completed: boolean;
}

export function ProgressStep({
  title,
  active,
  completed,
}: ProgressStepProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {completed ? (
        <CheckCircle2 className="h-7 w-7 text-green-600" />
      ) : active ? (
        <Loader2 className="h-7 w-7 animate-spin text-slate-900" />
      ) : (
        <div className="h-7 w-7 rounded-full border-2 border-slate-300" />
      )}

      <span
        className={`font-medium ${
          completed
            ? "text-green-600"
            : active
            ? "text-slate-900"
            : "text-slate-400"
        }`}
      >
        {title}
      </span>
    </div>
  );
}