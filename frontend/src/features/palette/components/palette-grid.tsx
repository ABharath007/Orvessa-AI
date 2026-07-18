"use client";

import { mockPalettes } from "../mock/palette.mock";
import { PaletteCard } from "./palette-card";

export function PaletteGrid() {
  return (
    <section
      className="
        grid
        gap-8
        sm:grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
        animate-in
        fade-in
        duration-500
      "
    >
      {mockPalettes.map((palette) => (
        <PaletteCard
          key={palette.id}
          palette={palette}
        />
      ))}
    </section>
  );
}