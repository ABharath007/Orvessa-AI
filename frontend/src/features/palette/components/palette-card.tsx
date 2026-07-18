"use client";

import { Copy, Bookmark } from "lucide-react";

import type { Palette } from "../types/palette.types";
import { ColorCard } from "./color-card";

interface PaletteCardProps {
  palette: Palette;
}

export function PaletteCard({
  palette,
}: PaletteCardProps) {
  const handleCopy = async () => {
    const colors = palette.colors
      .map((color) => color.hex)
      .join(", ");

    await navigator.clipboard.writeText(colors);
  };

  return (
    <div
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
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3
            className="
              text-xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {palette.name}
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            {palette.category}
          </p>
        </div>

        <button
          className="
            rounded-xl
            border
            border-slate-300
            bg-white
            p-2
            transition-all
            hover:bg-slate-100
            hover:shadow-sm
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:hover:bg-slate-700
          "
        >
          <Bookmark className="h-5 w-5" />
        </button>
      </div>

      {/* Description */}
      <p
        className="
          mb-6
          text-sm
          leading-6
          text-slate-500
          dark:text-slate-400
        "
      >
        {palette.description}
      </p>

      {/* Colors */}
      <div className="grid grid-cols-4 gap-3">
        {palette.colors.map((color) => (
          <ColorCard
            key={color.id}
            hex={color.hex}
          />
        ))}
      </div>

      {/* Footer */}
      <button
        onClick={handleCopy}
        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-indigo-600
          py-3
          font-semibold
          text-white
          transition-all
          hover:bg-indigo-700
          hover:shadow-lg
        "
      >
        <Copy className="h-4 w-4" />
        Copy Palette
      </button>
    </div>
  );
}