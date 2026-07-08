"use client";

import { FurnitureGrid } from "@/features/furniture/components/furniture-grid";
import { FurnitureToolbar } from "@/features/furniture/components/furniture-toolbar";

export default function FurniturePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Furniture
        </h1>

        <p className="mt-2 text-slate-500">
          Browse furniture recommendations for your interior designs.
        </p>
      </div>

      <FurnitureToolbar />

      <FurnitureGrid />
    </div>
  );
}
