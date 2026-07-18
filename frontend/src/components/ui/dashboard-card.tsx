import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
}

export function DashboardCard({
  children,
  className,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        `
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl

          dark:border-slate-800
          dark:bg-slate-900
        `,
        className
      )}
    >
      {children}
    </div>
  );
}