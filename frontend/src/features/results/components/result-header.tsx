"use client";

import {
  Sparkles,
  Download,
  Share2,
  RefreshCw,
  Heart,
} from "lucide-react";

interface ResultHeaderProps {
  roomType: string;
  style: string;
}

export function ResultHeader({
  roomType,
  style,
}: ResultHeaderProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow">
            <Sparkles className="h-4 w-4" />
            AI Design Generated Successfully
          </div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Your Interior Design is Ready
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Room Type:
            <span className="ml-2 font-semibold text-slate-900 dark:text-white">
              {roomType}
            </span>

            <span className="mx-3">•</span>

            Style:
            <span className="ml-2 font-semibold text-slate-900 dark:text-white">
              {style}
            </span>
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <Heart className="h-5 w-5" />
            Favorite
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <Share2 className="h-5 w-5" />
            Share
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <Download className="h-5 w-5" />
            Download
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white transition hover:opacity-90">
            <RefreshCw className="h-5 w-5" />
            Generate Again
          </button>
        </div>
      </div>
    </section>
  );
}