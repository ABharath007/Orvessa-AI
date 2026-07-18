"use client";

import {
  CheckCircle2,
  Loader2,
  Circle,
} from "lucide-react";

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
    <div
      className={`
        flex
        items-center
        gap-4
        rounded-2xl
        border
        p-4
        transition-all
        duration-300

        ${
          completed
            ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
            : active
            ? "border-indigo-300 bg-indigo-50 shadow-md dark:border-indigo-700 dark:bg-indigo-900/20"
            : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
        }
      `}
    >
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center">
        {completed ? (
          <CheckCircle2 className="h-7 w-7 text-green-600" />
        ) : active ? (
          <Loader2 className="h-7 w-7 animate-spin text-indigo-600" />
        ) : (
          <Circle className="h-6 w-6 text-slate-400 dark:text-slate-500" />
        )}
      </div>

      {/* Text */}
      <div className="flex-1">
        <p
          className={`font-semibold transition-colors ${
            completed
              ? "text-green-700 dark:text-green-400"
              : active
              ? "text-indigo-700 dark:text-indigo-400"
              : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {title}
        </p>

        <p className="mt-1 text-sm">
          {completed ? (
            <span className="text-green-600 dark:text-green-400">
              ✓ Completed
            </span>
          ) : active ? (
            <span className="text-indigo-600 dark:text-indigo-400">
              Processing...
            </span>
          ) : (
            <span className="text-slate-400 dark:text-slate-500">
              Waiting...
            </span>
          )}
        </p>
      </div>
    </div>
  );
}