import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconContainerProps {
  children: ReactNode;
  className?: string;
}

export function IconContainer({
  children,
  className,
}: IconContainerProps) {
  return (
    <div
      className={cn(
        `
          flex
          items-center
          justify-center
          rounded-2xl
          bg-indigo-100
          p-3

          dark:bg-indigo-900/30
        `,
        className
      )}
    >
      {children}
    </div>
  );
}