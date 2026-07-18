"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  UploadCloud,
  ImagePlus,
  CheckCircle2,
} from "lucide-react";

interface UploadDropzoneProps {
  onFileSelect: (file: File) => void;
}

export function UploadDropzone({
  onFileSelect,
}: UploadDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10 MB
  });

  return (
    <div
      {...getRootProps()}
      className={`
        group
        cursor-pointer
        rounded-3xl
        border-2
        border-dashed
        p-12
        text-center
        transition-all
        duration-300

        ${
          isDragActive
            ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-950/30"
            : "border-slate-300 bg-white hover:border-indigo-400 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500"
        }
      `}
    >
      <input {...getInputProps()} />

      {/* Upload Icon */}
      <div
        className="
          mx-auto
          mb-6
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-indigo-100
          transition-transform
          duration-300
          group-hover:scale-110
          dark:bg-indigo-900/30
        "
      >
        {isDragActive ? (
          <CheckCircle2 className="h-12 w-12 text-indigo-600" />
        ) : (
          <UploadCloud className="h-12 w-12 text-indigo-600" />
        )}
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {isDragActive
          ? "Drop your image here"
          : "Upload Your Room"}
      </h2>

      <p className="mt-3 text-slate-500 dark:text-slate-400">
        Drag & drop your room image here or click to browse.
      </p>

      {/* Supported Formats */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm dark:bg-slate-800">
          <ImagePlus className="h-4 w-4 text-indigo-600" />
          JPG
        </div>

        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm dark:bg-slate-800">
          PNG
        </div>

        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm dark:bg-slate-800">
          WEBP
        </div>

        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm dark:bg-slate-800">
          Max 10 MB
        </div>
      </div>
    </div>
  );
}