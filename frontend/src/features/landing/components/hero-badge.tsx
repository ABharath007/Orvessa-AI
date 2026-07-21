"use client";

import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div
      className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-indigo-200/60
        bg-white/70
        px-5
        py-2.5
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-900/70
      "
    >
      <div
        className="
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          to-violet-600
          px-3
          py-1
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-white
        "
      >
        NEW
      </div>

      <Sparkles className="h-4 w-4 text-indigo-600 transition-transform duration-300 group-hover:rotate-12" />

      <span className="font-medium text-slate-700 dark:text-slate-200">
        AI Interior Design Platform
      </span>

      <span className="text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </div>
  );
}