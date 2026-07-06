"use client";

import { furnitureItems } from "../mock/furniture.mock";
import { FurnitureCard } from "./furniture-card";

export function ProjectFurniture() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          Furniture Recommendations
        </h2>

        <p className="text-slate-500">
          Recommended furniture for your AI-generated design.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {furnitureItems.map((item) => (
          <FurnitureCard
            key={item.id}
            furniture={item}
          />
        ))}
      </div>
    </section>
  );
}
