"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";

export function useLogin() {
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      console.log("✅ Login API Success");
      console.log(data);

      // Save user in Zustand
      login(
        data.user,
        data.accessToken,
        data.refreshToken
      );

      // Save cookie for middleware
      document.cookie =
        "orvessa-auth=true; path=/; SameSite=Lax";

      console.log("✅ Auth Store Updated");
      console.log("🍪 Auth Cookie Created");
      console.log("➡️ Redirecting to /dashboard");

      // Redirect to Dashboard
      router.replace("/dashboard");
    },

    onError: (error) => {
      console.error("❌ Login Failed");
      console.error(error);
    },
  });
}