"use client";

import Link from "next/link";
import {
  Home,
  Upload,
  Images,
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
    title: "Saved Designs",
    href: "/dashboard/saved",
    icon: Heart,
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
  return (
    <nav className="flex flex-1 flex-col gap-2 p-4">
      {navigation.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
          >
            <Icon className="h-5 w-5" />

            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}