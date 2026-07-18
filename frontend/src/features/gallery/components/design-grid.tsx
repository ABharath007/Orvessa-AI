"use client";

import { mockDesigns } from "../mock/gallery.mock";
import { DesignCard } from "./design-card";

export function DesignGrid() {
  return (
    <section
      className="
        grid
        gap-8
        sm:grid-cols-1
        md:grid-cols-2
        xl:grid-cols-2
        2xl:grid-cols-3
        animate-in
        fade-in
        duration-500
      "
    >
      {mockDesigns.map((design) => (
        <DesignCard
          key={design.id}
          id={design.id}
          image={design.image}
          style={design.style}
          roomType={design.roomType}
        />
      ))}
    </section>
  );
}