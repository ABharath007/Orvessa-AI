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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            {palette.name}
          </h3>

          <p className="text-sm text-slate-500">
            {palette.category}
          </p>
        </div>

        <button className="rounded-lg border p-2 hover:bg-slate-100">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm text-slate-500">
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
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-medium text-white transition hover:bg-slate-800"
      >
        <Copy className="h-4 w-4" />
        Copy Palette
      </button>
    </div>
  );
}
