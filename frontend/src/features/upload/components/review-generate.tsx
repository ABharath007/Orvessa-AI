"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Home,
  Palette,
  Sparkles,
  ArrowLeft,
  Wand2,
  CheckCircle2,
} from "lucide-react";

import { useUploadStore } from "../store/upload.store";

export function ReviewGenerate() {
  const router = useRouter();

  const {
    file,
    roomType,
    style,
    colorPalette,
    previousStep,
    setGenerating,
  } = useUploadStore();

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!file) return null;

  const handleGenerate = () => {
    setGenerating(true);

    setTimeout(() => {
      setGenerating(false);

      router.push("/dashboard/results");
    }, 3000);
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Review Your Design
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Verify your selections before Orvessa AI generates your
          personalized interior design.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Uploaded Room"
              width={1200}
              height={800}
              className="h-[600px] w-full object-cover"
            />
          )}
        </div>

        {/* Summary */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="mb-8 flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-600" />

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Design Summary
            </h2>
          </div>

          <div className="space-y-5">
            <SummaryCard
              icon={<Home className="h-5 w-5 text-blue-600" />}
              label="Room Type"
              value={roomType ?? "Not Selected"}
            />

            <SummaryCard
              icon={<Sparkles className="h-5 w-5 text-purple-600" />}
              label="Interior Style"
              value={style ?? "Not Selected"}
            />

            <SummaryCard
              icon={<Palette className="h-5 w-5 text-pink-600" />}
              label="Color Palette"
              value={colorPalette ?? "Not Selected"}
            />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <button
              onClick={previousStep}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </button>

            <button
              onClick={handleGenerate}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <Wand2 className="h-5 w-5" />
              Generate AI Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SummaryCardProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
}

function SummaryCard({
  icon,
  label,
  value,
}: SummaryCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
      <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-900">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-lg font-semibold capitalize text-slate-900 dark:text-white">
          {value || "Not Selected"}
        </p>
      </div>
    </div>
  );
}