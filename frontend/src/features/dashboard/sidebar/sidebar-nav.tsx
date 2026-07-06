"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Upload,
  Images,
  FolderOpen,
  Palette,
  Wallet,
  Sofa,
  Heart,
  User,
  Settings,
} from "lucide-react";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Upload Room",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    title: "AI Gallery",
    href: "/dashboard/gallery",
    icon: Images,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: FolderOpen,
  },
  {
    title: "Favorites",
    href: "/dashboard/favorites",
    icon: Heart,
  },
  {
    title: "Color Palette",
    href: "/dashboard/palette",
    icon: Palette,
  },
  {
    title: "Cost Estimation",
    href: "/dashboard/estimation",
    icon: Wallet,
  },
  {
    title: "Furniture",
    href: "/dashboard/furniture",
    icon: Sofa,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-2 p-4">
      {navigation.map((item) => {
        const Icon = item.icon;

        const isActive =
          item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
              isActive
                ? "bg-slate-900 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Icon className="h-5 w-5 flex-shrink-0" />

            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}