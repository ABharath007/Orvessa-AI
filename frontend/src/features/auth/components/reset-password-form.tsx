"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import { AuthCard } from "./auth-card";
import { PasswordInput } from "./password-input";

import { Button } from "@/components/ui/button";

export function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <AuthCard
        title="Password Updated 🎉"
        description="Your password has been changed successfully."
      >
        <div className="space-y-6">
          <Link href="/auth/login">
            <Button className="w-full">
              Login
            </Button>
          </Link>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Reset Password"
      description="Choose a new password."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <PasswordInput
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <PasswordInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
        />

        <Button
          type="submit"
          className="h-12 w-full"
        >
          Update Password
        </Button>

        <Link
          href="/auth/login"
          className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Login
        </Link>
      </form>
    </AuthCard>
  );
}