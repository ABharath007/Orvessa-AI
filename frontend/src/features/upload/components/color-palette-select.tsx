"use client";

import { colorPalettes } from "../constants/color-palettes";
import { useUploadStore } from "../store/upload.store";
import { ColorPaletteCard } from "./color-palette-card";

export function ColorPaletteSelect() {
  const {
    colorPalette,
    setColorPalette,
    nextStep,
    previousStep,
  } = useUploadStore();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Choose a Color Palette
        </h2>

        <p className="mt-2 text-slate-500">
          Select your preferred color theme.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {colorPalettes.map((palette) => (
          <ColorPaletteCard
            key={palette.id}
            title={palette.title}
            description={palette.description}
            colors={palette.colors}
            selected={colorPalette === palette.id}
            onClick={() => setColorPalette(palette.id)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={previousStep}
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100"
        >
          ← Back
        </button>

        <button
          onClick={nextStep}
          disabled={!colorPalette}
          className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}