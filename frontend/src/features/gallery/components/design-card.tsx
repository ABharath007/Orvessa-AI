"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  Heart,
  RefreshCcw,
  Eye,
} from "lucide-react";

import { DesignPreviewModal } from "./design-preview-modal";

import { useGalleryStore } from "../store/gallery.store";
import type { Design } from "../types/gallery.types";

interface DesignCardProps {
  id: number;
  image: string;
  style: string;
  roomType: string;
}

export function DesignCard({
  id,
  image,
  style,
  roomType,
}: DesignCardProps) {
  const [open, setOpen] = useState(false);

  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useGalleryStore();

  const favorite = isFavorite(id);

  const handleFavorite = () => {
    const design: Design = {
      id,
      image,
      style,
      roomType,
    };

    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite(design);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image */}
        <div
          className="group relative cursor-pointer overflow-hidden"
          onClick={() => setOpen(true)}
        >
          <Image
            src={image}
            alt={style}
            width={800}
            height={600}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900">
              <Eye className="h-5 w-5" />
              Preview Design
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-5">
          <div>
            <h3 className="text-xl font-semibold">
              {style}
            </h3>

            <p className="text-sm text-slate-500">
              {roomType}
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            {/* Favorite */}
            <button
              onClick={handleFavorite}
              className="rounded-xl border p-3 transition hover:bg-slate-100"
            >
              <Heart
                className={`h-5 w-5 transition ${
                  favorite
                    ? "fill-red-500 text-red-500"
                    : ""
                }`}
              />
            </button>

            {/* Download */}
            <button
  onClick={async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${style.replace(/\s+/g, "-").toLowerCase()}.jpg`;

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  }}
  className="rounded-xl border p-3 transition hover:bg-slate-100"
>
  <Download className="h-5 w-5" />
</button>

            {/* Regenerate */}
            <button className="rounded-xl border p-3 transition hover:bg-slate-100">
              <RefreshCcw className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <DesignPreviewModal
        open={open}
        onOpenChange={setOpen}
        image={image}
        style={style}
        roomType={roomType}
      />
    </>
  );
}