"use client";

import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function RememberMe() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />

        <Label
          htmlFor="remember"
          className="cursor-pointer text-sm"
        >
          Remember me
        </Label>
      </div>

      <Link
        href="/auth/forgot-password"
        className="text-sm font-medium text-primary hover:underline"
      >
        Forgot Password?
      </Link>
    </div>
  );
}