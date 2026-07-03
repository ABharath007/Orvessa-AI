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
      login(
        data.user,
        data.accessToken,
        data.refreshToken
      );

      router.push("/dashboard");
    },

    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
}