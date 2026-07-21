import {
  LayoutDashboard,
  FolderKanban,
  CheckCircle2,
  Heart,
  Wallet,
  BarChart3,
  PieChart,
  Clock,
  Sparkles,
  Upload,
} from "lucide-react";

import type { SearchItem } from "../types/search.types";

export const dashboardSearchData: SearchItem[] = [
  // Dashboard Page
  {
    id: 1,
    title: "Dashboard",
    description: "Overview of your workspace",
    href: "/dashboard",
    icon: LayoutDashboard,
    group: "Dashboard",
    type: "page",
    keywords: [
      "dashboard",
      "home",
      "overview",
      "workspace",
      "main",
      "landing",
    ],
    priority: 100,
  },

  // Project Card
  {
    id: 2,
    title: "Projects Card",
    description: "View all your projects",
    href: "/dashboard#projects-card",
    icon: FolderKanban,
    group: "Dashboard",
    type: "section",
    section: "Projects",
    keywords: [
      "projects",
      "card",
      "workspace",
      "designs",
      "history",
    ],
    priority: 95,
  },

  // Completed
  {
    id: 3,
    title: "Completed Projects",
    description: "Recently completed projects",
    href: "/dashboard#completed-card",
    icon: CheckCircle2,
    group: "Dashboard",
    type: "section",
    section: "Completed",
    keywords: [
      "completed",
      "finished",
      "done",
      "success",
    ],
    priority: 90,
  },

  // Favorites
  {
    id: 4,
    title: "Favorites",
    description: "Saved AI designs",
    href: "/dashboard#favorites-card",
    icon: Heart,
    group: "Dashboard",
    type: "section",
    section: "Favorites",
    keywords: [
      "favorite",
      "saved",
      "liked",
      "wishlist",
    ],
    priority: 85,
  },

  // Budget
  {
    id: 5,
    title: "Budget Overview",
    description: "Estimated renovation budget",
    href: "/dashboard#budget-card",
    icon: Wallet,
    group: "Dashboard",
    type: "section",
    section: "Budget",
    keywords: [
      "budget",
      "money",
      "cost",
      "price",
      "expense",
    ],
    priority: 80,
  },

  // Growth Chart
  {
    id: 6,
    title: "Project Growth",
    description: "Project growth analytics",
    href: "/dashboard#growth-chart",
    icon: BarChart3,
    group: "Dashboard",
    type: "section",
    section: "Analytics",
    keywords: [
      "growth",
      "chart",
      "analytics",
      "graph",
      "statistics",
    ],
    priority: 75,
  },

  // Room Types
  {
    id: 7,
    title: "Room Types",
    description: "Distribution of room categories",
    href: "/dashboard#room-types",
    icon: PieChart,
    group: "Dashboard",
    type: "section",
    section: "Charts",
    keywords: [
      "rooms",
      "pie chart",
      "distribution",
      "living room",
      "bedroom",
    ],
    priority: 70,
  },

  // Recent Activity
  {
    id: 8,
    title: "Recent Activity",
    description: "Latest project updates",
    href: "/dashboard#recent-activity",
    icon: Clock,
    group: "Dashboard",
    type: "section",
    section: "Activity",
    keywords: [
      "recent",
      "activity",
      "history",
      "timeline",
      "updates",
    ],
    priority: 65,
  },

  // Quick Actions
  {
    id: 9,
    title: "Quick Actions",
    description: "Fast access to common tasks",
    href: "/dashboard#quick-actions",
    icon: Sparkles,
    group: "Dashboard",
    type: "section",
    section: "Actions",
    keywords: [
      "quick",
      "actions",
      "shortcuts",
      "tools",
    ],
    priority: 60,
  },

  // Upload Shortcut
  {
    id: 10,
    title: "Upload New Room",
    description: "Start designing a room",
    href: "/upload",
    icon: Upload,
    group: "Dashboard",
    type: "action",
    keywords: [
      "upload",
      "room",
      "new",
      "generate",
      "design",
      "ai",
    ],
    priority: 95,
  },
];