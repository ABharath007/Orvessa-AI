"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/login.schema";

import { useLogin } from "@/features/auth/hooks/use-login";

import { AuthCard } from "./auth-card";
import { PasswordInput } from "./password-input";
import { RememberMe } from "./remember-me";
import { AuthDivider } from "./auth-divider";
import { SocialLogin } from "./social-login";

import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function LoginForm() {
  const loginMutation = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
    loginMutation.mutate(values);
  };

  return (
    <AuthCard
      title="Welcome Back 👋"
      description="Login to continue to Orvessa AI"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300">
                  Email
                </FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 dark:text-slate-300">
                  Password
                </FormLabel>

                <FormControl>
                  <PasswordInput
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <RememberMe />

          <Link
  href="/auth/forgot-password"
  className="
    text-sm
    font-medium
    text-indigo-600
    transition
    hover:text-indigo-700
    hover:underline
    dark:text-indigo-400
    dark:hover:text-indigo-300
  "
>
  Forgot Password?
</Link>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="
              h-12
              w-full
              rounded-xl
              bg-indigo-600
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-indigo-700
              hover:shadow-lg
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loginMutation.isPending
              ? "Signing In..."
              : "Login"}
          </button>

          <AuthDivider />

          <SocialLogin />

          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="
                font-semibold
                text-indigo-600
                transition
                hover:text-indigo-700
                hover:underline
                dark:text-indigo-400
                dark:hover:text-indigo-300
              "
            >
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </AuthCard>
  );
}