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
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Favorites",
      value: stats.favorites,
      icon: Heart,
      iconColor: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30",
    },
    {
      title: "AI Designs",
      value: stats.generatedDesigns,
      icon: Sparkles,
      iconColor: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    },
  ];

  return (
    <section
      className="
        grid
        gap-8
        md:grid-cols-3
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-indigo-300
              hover:shadow-2xl
              dark:border-slate-700
              dark:bg-slate-900
              dark:hover:border-indigo-500
            "
          >
            <div className="flex items-center justify-between">
              {/* Left */}
              <div>
                <p
                  className="
                    text-sm
                    font-medium
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {card.title}
                </p>

                <h3
                  className="
                    mt-3
                    text-4xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {card.value}
                </h3>
              </div>

              {/* Icon */}
              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  transition-all
                  duration-300
                  group-hover:scale-110
                  ${card.bgColor}
                `}
              >
                <Icon
                  className={`h-7 w-7 ${card.iconColor}`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}