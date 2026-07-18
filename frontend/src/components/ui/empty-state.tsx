"use client";

import { ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-20 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-6 rounded-full bg-slate-100 p-5 dark:bg-slate-800">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-500 dark:text-slate-400">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}