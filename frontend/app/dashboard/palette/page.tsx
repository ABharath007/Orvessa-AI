"use client";

import { PaletteGrid } from "@/features/palette/components/palette-grid";
import { PaletteToolbar } from "@/features/palette/components/palette-toolbar";

export default function PalettePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          Color Palettes 🎨
        </h1>

        <p
          className="
            max-w-3xl
            text-lg
            leading-7
            text-slate-500
            dark:text-slate-400
          "
        >
          Discover beautiful AI-curated interior color palettes to create
          stunning and harmonious living spaces.
        </p>
      </section>

      {/* Toolbar */}
      <PaletteToolbar />

      {/* Grid */}
      <PaletteGrid />
    </div>
  );
}