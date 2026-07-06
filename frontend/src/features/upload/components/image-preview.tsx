"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { useUploadStore } from "../store/upload.store";

interface ImagePreviewProps {
  file: File;
  onRemove: () => void;
}

export function ImagePreview({
  file,
  onRemove,
}: ImagePreviewProps) {
  const { nextStep } = useUploadStore();

  const imageUrl = URL.createObjectURL(file);

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Image
          src={imageUrl}
          alt="Room Preview"
          width={1200}
          height={800}
          className="h-[500px] w-full object-cover"
        />

        <button
          onClick={onRemove}
          className="absolute right-4 top-4 rounded-full bg-red-600 p-2 text-white transition hover:bg-red-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onRemove}
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100"
        >
          Change Image
        </button>

        <button
          onClick={nextStep}
          className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}