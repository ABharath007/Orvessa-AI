"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

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

  if (!file) return null;

  const imageUrl = URL.createObjectURL(file);

  const handleGenerate = () => {
    // Show Generating Screen
    setGenerating(true);

    // Simulate AI Processing
    setTimeout(() => {
      setGenerating(false);

      console.log("✅ AI Generation Completed!");

      // Navigate to AI Results Page
      router.push("/dashboard/results");
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold">
          Review Your Design
        </h2>

        <p className="mt-2 text-slate-500">
          Verify everything before generating your AI interior.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Uploaded Image */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={imageUrl}
            alt="Uploaded Room"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-2xl font-semibold">
            Design Summary
          </h3>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-slate-500">
                Room Type
              </p>

              <p className="text-lg font-semibold capitalize">
                {roomType}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Interior Style
              </p>

              <p className="text-lg font-semibold capitalize">
                {style}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Color Palette
              </p>

              <p className="text-lg font-semibold capitalize">
                {colorPalette}
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              onClick={previousStep}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
            >
              ← Back
            </button>

            <button
              onClick={handleGenerate}
              className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              ✨ Generate AI Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}