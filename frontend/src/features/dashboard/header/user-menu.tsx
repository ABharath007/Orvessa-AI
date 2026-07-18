"use client";

import { useRouter } from "next/navigation";
import {
  User,
  Settings,
  LogOut,
  CreditCard,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuthStore } from "@/features/auth/store/auth.store";

export function UserMenu() {
  const router = useRouter();

  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();

    document.cookie =
      "orvessa-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    router.replace("/auth/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-slate-900
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-slate-800
            dark:bg-indigo-600
            dark:hover:bg-indigo-500
          "
        >
          {user?.fullName?.charAt(0) ?? "K"}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-64
          border-slate-200
          bg-white
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-semibold dark:text-white">
              {user?.fullName ?? "Kiran"}
            </span>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              {user?.email ?? "kiran@example.com"}
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() =>
            router.push("/dashboard/profile")
          }
          className="cursor-pointer"
        >
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            router.push("/dashboard/subscription")
          }
          className="cursor-pointer"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Subscription
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            router.push("/dashboard/settings")
          }
          className="cursor-pointer"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}