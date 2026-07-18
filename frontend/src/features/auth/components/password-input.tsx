"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] =
    React.useState(false);

  return (
    <div className="relative">
      <Input
        ref={ref}
        type={showPassword ? "text" : "password"}
        className={`pr-12 ${className ?? ""}`}
        {...props}
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() =>
          setShowPassword((prev) => !prev)
        }
        className="
          absolute
          right-1
          top-1
          h-10
          w-10
          rounded-lg
          text-slate-500
          transition-all
          hover:bg-slate-100
          hover:text-slate-900
          dark:text-slate-400
          dark:hover:bg-slate-800
          dark:hover:text-white
        "
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";