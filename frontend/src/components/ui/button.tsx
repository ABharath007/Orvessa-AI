import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    whitespace-nowrap
    rounded-xl
    text-sm
    font-semibold
    transition-all
    duration-300
    focus-visible:outline-none
    focus-visible:ring-4
    focus-visible:ring-indigo-500/20
    disabled:pointer-events-none
    disabled:opacity-50
    active:scale-[0.98]

    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
    [&_svg]:h-4
    [&_svg]:w-4
  `,
  {
    variants: {
      variant: {
        default: `
          bg-indigo-600
          text-white
          hover:bg-indigo-700
          hover:shadow-lg
        `,

        outline: `
          border
          border-slate-300
          bg-white
          text-slate-700
          hover:bg-slate-100
          hover:border-indigo-500

          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
          dark:hover:bg-slate-700
          dark:hover:border-indigo-500
        `,

        secondary: `
          bg-slate-100
          text-slate-800
          hover:bg-slate-200

          dark:bg-slate-800
          dark:text-white
          dark:hover:bg-slate-700
        `,

        ghost: `
          bg-transparent
          text-slate-700
          hover:bg-slate-100

          dark:text-slate-300
          dark:hover:bg-slate-800
          dark:hover:text-white
        `,

        destructive: `
          bg-red-600
          text-white
          hover:bg-red-700
        `,

        link: `
          bg-transparent
          p-0
          text-indigo-600
          underline-offset-4
          hover:underline

          dark:text-indigo-400
        `,
      },

      size: {
        default: "h-10 px-5 py-2",
        xs: "h-7 px-3 text-xs",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        "icon-xs": "h-7 w-7",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };