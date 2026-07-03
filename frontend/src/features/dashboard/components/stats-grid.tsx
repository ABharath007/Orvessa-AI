import {
  Home,
  Images,
  Heart,
  Wallet,
} from "lucide-react";

import { StatCard } from "./stat-card";

export function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Rooms Designed"
        value="12"
        change="+12%"
        icon={<Home className="h-6 w-6" />}
      />

      <StatCard
        title="AI Designs"
        value="156"
        change="+28%"
        icon={<Images className="h-6 w-6" />}
      />

      <StatCard
        title="Saved Designs"
        value="24"
        change="+9%"
        icon={<Heart className="h-6 w-6" />}
      />

      <StatCard
        title="Estimated Budget"
        value="₹1.2L"
        change="+18%"
        icon={<Wallet className="h-6 w-6" />}
      />
    </div>
  );
}