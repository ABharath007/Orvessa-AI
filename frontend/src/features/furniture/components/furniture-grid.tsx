"use client";

import { furnitureData } from "../mock/furniture.mock";
import { FurnitureCard } from "./furniture-card";

export function FurnitureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {furnitureData.map((item) => (
        <FurnitureCard
          key={item.id}
          furniture={item}
        />
      ))}
    </div>
  );
}