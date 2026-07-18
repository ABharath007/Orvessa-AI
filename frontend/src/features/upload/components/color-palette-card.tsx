"use client";

import { CheckCircle2, Palette } from "lucide-react";

interface ColorPaletteCardProps {
  title: string;
  description: string;
  colors: string[];
  selected: boolean;
  onClick: () => void;
}

export function ColorPaletteCard({
  title,
  description,
  colors,
  selected,
  onClick,
}: ColorPaletteCardProps) {
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
            ? "border-pink-600 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white shadow-xl scale-[1.02]"
            : "border-slate-200 bg-white hover:-translate-y-1 hover:border-pink-400 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-pink-500"
        }
      `}
    >
      {/* Selected Badge */}
      {selected && (
        <div className="absolute right-4 top-4">
          <CheckCircle2 className="h-6 w-6 text-white" />
        </div>
      )}

      {/* Palette Icon */}
      <div
        className={`
          mb-5
          inline-flex
          rounded-2xl
          p-3
          transition-all
          duration-300
          group-hover:scale-110

          ${
            selected
              ? "bg-white/20"
              : "bg-pink-100 dark:bg-slate-800"
          }
        `}
      >
        <Palette
          className={`h-7 w-7 ${
            selected
              ? "text-white"
              : "text-pink-600"
          }`}
        />
      </div>

      {/* Color Swatches */}
      <div className="mb-6 flex gap-3">
        {colors.map((color) => (
          <div
            key={color}
            className="
              h-11
              w-11
              rounded-full
              border-2
              border-white
              shadow-md
              transition-transform
              duration-300
              group-hover:scale-110
            "
            style={{ backgroundColor: color }}
          />
        ))}
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
            ? "text-pink-100"
            : "text-slate-500 dark:text-slate-400"
        }`}
      >
        {description}
      </p>

      {/* Accent Line */}
      {!selected && (
        <div
          className="
            mt-6
            h-1
            w-0
            rounded-full
            bg-pink-600
            transition-all
            duration-300
            group-hover:w-20
          "
        />
      )}
    </button>
  );
}