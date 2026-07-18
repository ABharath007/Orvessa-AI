"use client";

import {
  ArrowLeft,
  ArrowRight,
  Palette,
} from "lucide-react";

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
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-pink-100 p-3 dark:bg-pink-900/30">
          <Palette className="h-7 w-7 text-pink-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Choose a Color Palette
          </h2>

          <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">
            Select the color theme that best matches your
            vision. Orvessa AI will use these colors as the
            foundation for generating your redesigned space.
          </p>
        </div>
      </div>

      {/* Palette Cards */}
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

      {/* Footer */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={previousStep}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-6
            py-3
            font-semibold
            transition-all
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
            dark:hover:bg-slate-800
          "
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={!colorPalette}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-indigo-600
            px-8
            py-3
            font-semibold
            text-white
            transition-all
            hover:bg-indigo-700
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Continue
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}