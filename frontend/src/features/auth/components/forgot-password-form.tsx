"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowLeft, Mail } from "lucide-react";

import { AuthCard } from "./auth-card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Backend will be connected later
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <AuthCard
        title="Check your email 📩"
        description="We've sent a password reset link."
      >
        <div className="space-y-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40">
            <Mail className="h-10 w-10 text-indigo-600" />
          </div>

          <p className="text-slate-600 dark:text-slate-400">
            A password reset link has been sent to
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            {email}
          </p>

          <Link href="/auth/login">
            <Button className="w-full">
              Back to Login
            </Button>
          </Link>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Forgot Password?"
      description="Enter your email and we'll send you a reset link."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />
        </div>

        <Button
          type="submit"
          className="h-12 w-full"
        >
          Send Reset Link
        </Button>

        <Link
          href="/auth/login"
          className="flex items-center justify-center gap-2 text-sm text-slate-500 transition hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Login
        </Link>
      </form>
    </AuthCard>
  );
}