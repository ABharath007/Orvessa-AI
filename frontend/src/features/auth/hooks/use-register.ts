"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";
import { useProfileStore } from "@/features/profile/store/profile.store";

export function useRegister() {
  const router = useRouter();

  const login = useAuthStore(
    (state) => state.login
  );

  const initializeProfile =
    useProfileStore(
      (state) => state.initializeProfile
    );

  return useMutation({
    mutationFn: authService.register,

    onSuccess: (data) => {
      console.log("✅ Registration Successful");
      console.log(data);

      // Save authenticated user
      login(
        data.user,
        data.accessToken,
        data.refreshToken
      );

      // Initialize profile
      initializeProfile(
        data.user.fullName,
        data.user.email
      );

      // Create auth cookie for middleware
      document.cookie =
        "orvessa-auth=true; path=/; SameSite=Lax";

      console.log("✅ Auth Store Updated");
      console.log("✅ Profile Store Updated");
      console.log("🍪 Auth Cookie Created");
      console.log("➡️ Redirecting to /dashboard");

      // Redirect to dashboard
      router.replace("/dashboard");
    },

    onError: (error) => {
      console.error("❌ Registration Failed");
      console.error(error);
    },
  });
}