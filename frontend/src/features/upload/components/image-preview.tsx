"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ArrowRight,
  ImageIcon,
  FileImage,
} from "lucide-react";

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

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(file);

    setImageUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  const fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <div className="space-y-8">
      {/* Preview Card */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-100 p-3 dark:bg-indigo-900/30">
              <ImageIcon className="h-6 w-6 text-indigo-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Image Preview
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Review your uploaded room image
              </p>
            </div>
          </div>

          <button
            onClick={onRemove}
            className="rounded-full bg-red-500 p-2 text-white transition hover:bg-red-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image */}
        <div className="bg-slate-100 dark:bg-slate-800">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Room Preview"
              width={1200}
              height={800}
              className="h-[520px] w-full object-cover"
            />
          )}
        </div>

        {/* File Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 p-5 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <FileImage className="h-5 w-5 text-indigo-600" />

            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {file.name}
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                {fileSize}
              </p>
            </div>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
            Ready for AI Processing
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <button
          onClick={onRemove}
          className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
        >
          Change Image
        </button>

        <button
          onClick={nextStep}
          className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg"
        >
          Continue

          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}