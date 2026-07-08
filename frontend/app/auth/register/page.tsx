"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { RegisterForm } from "@/features/auth/components/register-form";
import { useAuthStore } from "@/features/auth/store/auth.store";

export default function RegisterPage() {
  const router = useRouter();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

  return <RegisterForm />;
}