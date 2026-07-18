"use client";

import { CheckCircle2 } from "lucide-react";
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
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        p-6
        text-left
        transition-all
        duration-300

        ${
          selected
            ? "border-purple-600 bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl scale-[1.02]"
            : "border-slate-200 bg-white hover:-translate-y-1 hover:border-purple-400 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-purple-500"
        }
      `}
    >
      {/* Selected Badge */}
      {selected && (
        <div className="absolute right-4 top-4">
          <CheckCircle2 className="h-6 w-6 text-white" />
        </div>
      )}

      {/* Icon */}
      <div
        className={`
          mb-6
          inline-flex
          rounded-2xl
          p-4
          transition-all
          duration-300
          group-hover:scale-110

          ${
            selected
              ? "bg-white/20"
              : "bg-purple-100 dark:bg-slate-800"
          }
        `}
      >
        <Icon
          className={`h-8 w-8 ${
            selected
              ? "text-white"
              : "text-purple-600"
          }`}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold ${
          selected
            ? "text-white"
            : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`mt-3 text-sm leading-6 ${
          selected
            ? "text-purple-100"
            : "text-slate-500 dark:text-slate-400"
        }`}
      >
        {description}
      </p>

      {/* Bottom Accent */}
      {!selected && (
        <div
          className="
            mt-6
            h-1
            w-0
            rounded-full
            bg-purple-600
            transition-all
            duration-300
            group-hover:w-20
          "
        />
      )}
    </button>
  );
}