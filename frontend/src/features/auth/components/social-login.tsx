"use client";

import { Globe, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialLogin() {
  return (
    <div className="grid gap-3">
      {/* Google */}
      <Button
        type="button"
        variant="outline"
        className="
          h-12
          border-slate-300
          bg-white
          text-slate-700
          transition-all
          duration-300
          hover:bg-slate-100
          hover:border-indigo-500
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
          dark:hover:bg-slate-700
          dark:hover:border-indigo-500
        "
      >
        <Globe className="mr-2 h-5 w-5 text-red-500" />
        Continue with Google
      </Button>

      {/* GitHub */}
      <Button
        type="button"
        variant="outline"
        className="
          h-12
          border-slate-300
          bg-white
          text-slate-700
          transition-all
          duration-300
          hover:bg-slate-100
          hover:border-indigo-500
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
          dark:hover:bg-slate-700
          dark:hover:border-indigo-500
        "
      >
        <LogIn className="mr-2 h-5 w-5" />
        Continue with GitHub
      </Button>
    </div>
  );
}