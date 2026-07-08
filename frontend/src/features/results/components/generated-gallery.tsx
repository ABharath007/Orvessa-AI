"use client";

import Image from "next/image";

interface GeneratedGalleryProps {
  images: {
    id: number;
    image: string;
  }[];
}

export function GeneratedGallery({
  images,
}: GeneratedGalleryProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        More Variations
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {images.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <Image
              src={item.image}
              alt="Generated"
              width={600}
              height={500}
              className="h-56 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}