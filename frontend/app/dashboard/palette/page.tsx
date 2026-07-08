"use client";

import { PaletteGrid } from "@/features/palette/components/palette-grid";
import { PaletteToolbar } from "@/features/palette/components/palette-toolbar";

export default function PalettePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold">
          Color Palettes 🎨
        </h1>

        <p className="mt-2 text-slate-500">
          Discover beautiful interior color palettes for every room.
        </p>
      </div>

      {/* Toolbar */}
      <PaletteToolbar />

      {/* Grid */}
      <PaletteGrid />
    </div>
  );
}