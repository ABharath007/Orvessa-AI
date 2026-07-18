"use client";

import { furnitureData } from "../mock/furniture.mock";
import { FurnitureCard } from "./furniture-card";

export function FurnitureGrid() {
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
      {furnitureData.map((item) => (
        <FurnitureCard
          key={item.id}
          furniture={item}
        />
      ))}
    </section>
  );
}