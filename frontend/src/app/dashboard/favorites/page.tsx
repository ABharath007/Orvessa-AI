"use client";

import { useGalleryStore } from "@/features/gallery/store/gallery.store";
import { DesignCard } from "@/features/gallery/components/design-card";

export default function FavoritesPage() {
  const { favorites } = useGalleryStore();

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div>
        <h1 className="text-4xl font-bold">
          Favorite Designs ❤️
        </h1>

        <p className="mt-2 text-slate-500">
          Your saved AI-generated interior designs.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
          <h2 className="text-2xl font-semibold">
            No Favorite Designs
          </h2>

          <p className="mt-2 text-slate-500">
            Save designs from the gallery and they will appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {favorites.map((design) => (
            <DesignCard
              key={design.id}
              id={design.id}
              image={design.image}
              style={design.style}
              roomType={design.roomType}
            />
          ))}
        </div>
      )}
    </div>
  );
}