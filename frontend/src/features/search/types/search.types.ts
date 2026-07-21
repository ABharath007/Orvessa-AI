import type { LucideIcon } from "lucide-react";

export interface SearchItem {
  id: number;

  title: string;

  description: string;

  href: string;

  group:
    | "Dashboard"
    | "Upload"
    | "Gallery"
    | "Projects"
    | "Furniture"
    | "Profile"
    | "Settings"
    | "Actions";

  type:
    | "page"
    | "section"
    | "action"
    | "setting"
    | "button";

  icon: LucideIcon;

  keywords: string[];

  priority?: number;

  section?: string;
}