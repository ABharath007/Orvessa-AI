"use client";

import {
  Home,
  Images,
  Heart,
  Wallet,
} from "lucide-react";

import { StatCard } from "./stat-card";

import { useDashboard } from "../hooks/use-dashboard";

export function StatsGrid() {
  const {
    totalProjects,
    completedProjects,
    favoriteProjects,
    totalBudget,
  } = useDashboard();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Projects"
        value={totalProjects.toString()}
        change={`${completedProjects} Completed`}
        icon={<Home className="h-6 w-6" />}
      />

      <StatCard
        title="Completed"
        value={completedProjects.toString()}
        change={`of ${totalProjects}`}
        icon={<Images className="h-6 w-6" />}
      />

      <StatCard
        title="Favorites"
        value={favoriteProjects.toString()}
        change="Saved Projects"
        icon={<Heart className="h-6 w-6" />}
      />

      <StatCard
        title="Total Budget"
        value={`₹${(
          totalBudget / 100000
        ).toFixed(1)}L`}
        change="Estimated"
        icon={<Wallet className="h-6 w-6" />}
      />
    </div>
  );
}