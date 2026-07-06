"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

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
  });

  return (
    <div
      {...getRootProps()}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 transition ${
        isDragActive
          ? "border-slate-900 bg-slate-100"
          : "border-slate-300 bg-white"
      }`}
    >
      <input {...getInputProps()} />

      <UploadCloud className="mb-4 h-12 w-12 text-slate-500" />

      <h2 className="text-xl font-semibold">
        Drag & Drop Your Room Image
      </h2>

      <p className="mt-2 text-center text-slate-500">
        or click to browse your computer
      </p>
    </div>
  );
}