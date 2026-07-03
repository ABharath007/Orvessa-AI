"use client";

import { Button } from "@/components/ui/button";
import { Globe, LogIn } from "lucide-react";

export function SocialLogin() {
  return (
    <div className="grid gap-3">
      <Button
        variant="outline"
        type="button"
        className="h-12"
      >
        <Globe className="mr-2 h-5 w-5" />
        Continue with Google
      </Button>

      <Button
        variant="outline"
        type="button"
        className="h-12"
      >
        <LogIn className="mr-2 h-5 w-5" />
        Continue with GitHub
      </Button>
    </div>
  );
}