"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Heart,
  Eye,
  Sparkles,
} from "lucide-react";

import { ImagePreviewModal } from "./image-preview-modal";
import { useFavorites } from "@/features/favorites/hooks/use-favorites";
import { downloadImage } from "@/lib/download";

interface GeneratedGalleryProps {
  images: {
    id: string | number;
    image: string;
  }[];
}

export function GeneratedGallery({
  images,
}: GeneratedGalleryProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const openPreview = (index: number) => {
    setCurrentIndex(index);
    setPreviewOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-3">
            <Sparkles className="h-6 w-6 text-white" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              AI Design Variations
            </h2>

            <p className="text-slate-500 dark:text-slate-400">
              Click any design to preview it.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {images.map((item, index) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div
                className="relative cursor-pointer overflow-hidden"
                onClick={() => openPreview(index)}
              >
                <Image
                  src={item.image}
                  alt={`AI Design ${index + 1}`}
                  width={600}
                  height={500}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                  <Eye className="h-10 w-10 scale-0 text-white transition-all duration-300 group-hover:scale-100" />
                </div>

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold backdrop-blur dark:bg-slate-900/80 dark:text-white">
                  Variation {index + 1}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    toggleFavorite({
                      id: String(item.id),
                      image: item.image,
                      title: `AI Design ${index + 1}`,
                    });
                  }}
                  className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:scale-110 dark:bg-slate-800"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isFavorite(String(item.id))
                        ? "fill-red-500 text-red-500"
                        : "text-red-500"
                    }`}
                  />
                </button>
              </div>

              <div className="space-y-4 p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  AI Design {index + 1}
                </h3>

                <div className="flex gap-3">
                  <button
                    onClick={() => openPreview(index)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </button>

                  <button
                    onClick={() =>
                      downloadImage(
                        item.image,
                        `design-${index + 1}.jpg`
                      )
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-2 font-medium text-white transition hover:opacity-90"
                  >
                    <Download className="h-4 w-4" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImagePreviewModal
        open={previewOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={() => setPreviewOpen(false)}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </>
  );
}