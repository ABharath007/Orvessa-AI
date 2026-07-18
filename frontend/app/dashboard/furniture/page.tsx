"use client";

import { FurnitureGrid } from "@/features/furniture/components/furniture-grid";
import { FurnitureToolbar } from "@/features/furniture/components/furniture-toolbar";

export default function FurniturePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <h1
          className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Furniture
        </h1>

        <p
          className="
            mt-3
            max-w-3xl
            text-lg
            text-slate-500
            dark:text-slate-400
          "
        >
          Browse AI-recommended furniture and decor to complete your
          interior designs.
        </p>
      </div>

      {/* Toolbar */}
      <FurnitureToolbar />

      {/* Furniture Grid */}
      <FurnitureGrid />
    </div>
  );
}