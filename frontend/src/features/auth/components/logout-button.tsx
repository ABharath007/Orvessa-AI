"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { useAuthStore } from "../store/auth.store";

export function LogoutButton() {
  const router = useRouter();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = () => {
    // Clear Zustand
    logout();

    // Remove middleware cookie
    document.cookie =
      "orvessa-auth=; Max-Age=0; path=/";

    // Redirect
    router.replace("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="
        inline-flex
        items-center
        gap-2
        rounded-2xl
        bg-red-600
        px-5
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-red-700
        hover:shadow-lg
        active:scale-95
      "
    >
      <LogOut className="h-5 w-5" />
      Logout
    </button>
  );
}