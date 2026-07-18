"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";
import { useProfileStore } from "@/features/profile/store/profile.store";

export function useLogin() {
  const router = useRouter();

  const login = useAuthStore(
    (state) => state.login
  );

  const initializeProfile =
    useProfileStore(
      (state) => state.initializeProfile
    );

  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      console.log("✅ Login Successful");
      console.log(data);

      // Save authenticated user
      login(
        data.user,
        data.accessToken,
        data.refreshToken
      );

      // Initialize Profile Store
      if (data.user) {
        initializeProfile(
          data.user.fullName,
          data.user.email
        );
      }

      // Create authentication cookie
      document.cookie =
        "orvessa-auth=true; path=/; SameSite=Lax";

      console.log("✅ Auth Store Updated");
      console.log("✅ Profile Store Updated");
      console.log("🍪 Authentication Cookie Created");
      console.log("➡️ Redirecting to Dashboard...");

      // Navigate to dashboard
      router.replace("/dashboard");
    },

    onError: (error) => {
      console.error("❌ Login Failed");
      console.error(error);
    },
  });
}