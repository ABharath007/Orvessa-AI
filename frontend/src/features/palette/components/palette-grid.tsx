"use client";

import { mockPalettes } from "../mock/palette.mock";
import { PaletteCard } from "./palette-card";

export function PaletteGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {mockPalettes.map((palette) => (
        <PaletteCard
          key={palette.id}
          palette={palette}
        />
      ))}
    </div>
  );
}
