"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/auth.store";

export function LogoutButton() {
  const router = useRouter();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    // Clear Zustand
    logout();

    // Remove middleware cookie
    document.cookie = "orvessa-auth=; Max-Age=0; path=/";

    // Redirect
    router.replace("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl bg-red-600 px-4 py-2 text-white"
    >
      Logout
    </button>
  );
}