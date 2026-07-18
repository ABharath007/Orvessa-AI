import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        h-12
        w-full
        min-w-0
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-3
        text-base
        text-slate-900
        placeholder:text-slate-400
        transition-all
        duration-300
        outline-none

        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium

        focus:border-indigo-500
        focus:ring-4
        focus:ring-indigo-500/20

        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50

        aria-invalid:border-red-500
        aria-invalid:ring-red-500/20

        dark:border-slate-700
        dark:bg-slate-800
        dark:text-white
        dark:placeholder:text-slate-400
        dark:focus:border-indigo-400
        dark:focus:ring-indigo-400/20

        md:text-sm
        `,
        className
      )}
      {...props}
    />
  );
}

export { Input };

