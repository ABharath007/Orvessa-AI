"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/login.schema";

import { AuthCard } from "./auth-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormValues) {
    console.log(values);
  }

  return (
    <AuthCard
      title="Welcome Back 👋"
      description="Login to continue to Orvessa AI"
    >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Email */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-slate-700"
          >
            Email
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="h-12 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-slate-900"
            {...form.register("email")}
          />

          {form.formState.errors.email && (
            <p className="text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </Label>

          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="h-12 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-slate-900"
            {...form.register("password")}
          />

          {form.formState.errors.password && (
            <p className="text-sm text-red-500">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl text-base font-semibold"
        >
          Login
        </Button>
      </form>
    </AuthCard>
  );
}