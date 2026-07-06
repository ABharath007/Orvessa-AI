"use client";

import { mockDesigns } from "../mock/gallery.mock";
import { DesignCard } from "./design-card";

export function DesignGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
      {mockDesigns.map((design) => (
        <DesignCard
          key={design.id}
          id={design.id}
          image={design.image}
          style={design.style}
          roomType={design.roomType}
        />
      ))}
    </div>
  );
}