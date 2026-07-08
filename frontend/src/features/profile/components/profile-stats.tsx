"use client";

import {
  FolderOpen,
  Heart,
  Sparkles,
} from "lucide-react";

import { profileData } from "../mock/profile.mock";

export function ProfileStats() {
  const { stats } = profileData;

  const cards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: FolderOpen,
      color: "text-blue-600 bg-blue-100",
    },
    {
      title: "Favorites",
      value: stats.favorites,
      icon: Heart,
      color: "text-red-600 bg-red-100",
    },
    {
      title: "AI Designs",
      value: stats.generatedDesigns,
      icon: Sparkles,
      color: "text-indigo-600 bg-indigo-100",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h3>
              </div>

              <div
                className={`rounded-xl p-3 ${card.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}