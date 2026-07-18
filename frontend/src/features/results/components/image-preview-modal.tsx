"use client";

import { useState } from "react";
import { shareImage } from "@/lib/share";
import Image from "next/image";

import { downloadImage } from "@/lib/download";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Heart,
  Share2,
} from "lucide-react";

interface ImagePreviewModalProps {
  open: boolean;
  images: {
    id: string | number;
    image: string;
  }[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function ImagePreviewModal({
  open,
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: ImagePreviewModalProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!open) return null;

  const image = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

        <h2 className="text-xl font-bold text-white">
          AI Design Preview
        </h2>

        <button
          onClick={onClose}
          className="rounded-xl bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </button>

      </div>

      {/* Main */}
      <div className="relative flex h-[calc(100vh-90px)] items-center justify-center overflow-hidden">

        {/* Previous */}
        <button
          onClick={onPrevious}
          className="absolute left-8 z-20 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        {/* Image */}
        <Image
          src={image.image}
          alt="Generated Design"
          width={1600}
          height={1000}
          className="max-h-[80vh] w-auto rounded-3xl object-contain transition duration-300"
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
          }}
        />

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-8 z-20 rounded-full bg-white/10 p-4 text-white transition hover:bg-white/20"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

      </div>

      {/* Bottom Toolbar */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 rounded-2xl bg-white p-3 shadow-2xl">

        <button
          onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
          className="rounded-xl p-3 transition hover:bg-slate-100"
        >
          <ZoomIn className="h-5 w-5" />
        </button>

        <button
          onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}
          className="rounded-xl p-3 transition hover:bg-slate-100"
        >
          <ZoomOut className="h-5 w-5" />
        </button>

        <button
          onClick={() => {
            setZoom(1);
            setRotation(0);
          }}
          className="rounded-xl p-3 transition hover:bg-slate-100"
        >
          Reset
        </button>

        <button
          onClick={() => setRotation((r) => r + 90)}
          className="rounded-xl p-3 transition hover:bg-slate-100"
        >
          <RotateCw className="h-5 w-5" />
        </button>

        <button className="rounded-xl p-3 transition hover:bg-slate-100">
          <Heart className="h-5 w-5 text-red-500" />
        </button>

        <button
  onClick={() =>
    shareImage(
      image.image,
      `Orvessa AI Design ${currentIndex + 1}`
    )
  }
  className="rounded-xl p-3 transition hover:bg-slate-100"
>
  <Share2 className="h-5 w-5 text-indigo-600" />
</button>

        <button
  onClick={() =>
    downloadImage(
      image.image,
      `orvessa-design-${currentIndex + 1}.jpg`
    )
  }
  className="rounded-xl p-3 transition hover:bg-slate-100"
>
  <Download className="h-5 w-5 text-green-600" />
</button>

      </div>

    </div>
  );
}