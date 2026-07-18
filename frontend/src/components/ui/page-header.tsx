import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function PageHeader({
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      {action}
    </div>
  );
}