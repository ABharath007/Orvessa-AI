import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface GradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function GradientButton({
  className,
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `
          rounded-xl
          bg-gradient-to-r
          from-indigo-600
          to-violet-600
          px-6
          py-3
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-xl
        `,
        className
      )}
    >
      {children}
    </button>
  );
}

