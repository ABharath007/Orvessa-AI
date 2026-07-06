"use client";

import type { LucideIcon } from "lucide-react";

interface StyleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
}

export function StyleCard({
  title,
  description,
  icon: Icon,
  selected,
  onClick,
}: StyleCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
        selected
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white hover:border-slate-400 hover:shadow-md"
      }`}
    >
      <div
        className={`mb-4 inline-flex rounded-xl p-3 ${
          selected ? "bg-white/20" : "bg-slate-100"
        }`}
      >
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p
        className={`mt-2 text-sm ${
          selected ? "text-slate-200" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </button>
  );
}