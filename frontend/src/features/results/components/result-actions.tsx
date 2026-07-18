"use client";

import {
  Download,
  Heart,
  RefreshCcw,
  Share2,
} from "lucide-react";

export function ResultActions() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Save, share or regenerate your AI interior design.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {/* Download */}
        <button
          className="
            group
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-pink-600
            px-6
            py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <Download className="h-5 w-5 transition-transform group-hover:scale-110" />
          Download
        </button>

        {/* Favorite */}
        <button
          className="
            group
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-6
            py-4
            font-semibold
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-red-50
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:hover:bg-red-900/20
          "
        >
          <Heart className="h-5 w-5 text-red-500 transition-transform group-hover:scale-110" />
          Save
        </button>

        {/* Regenerate */}
        <button
          className="
            group
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-6
            py-4
            font-semibold
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-indigo-50
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:hover:bg-indigo-900/20
          "
        >
          <RefreshCcw className="h-5 w-5 text-indigo-600 transition-transform duration-300 group-hover:rotate-180" />
          Regenerate
        </button>

        {/* Share */}
        <button
          className="
            group
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-6
            py-4
            font-semibold
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-emerald-50
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:hover:bg-emerald-900/20
          "
        >
          <Share2 className="h-5 w-5 text-emerald-600 transition-transform group-hover:scale-110" />
          Share
        </button>
      </div>
    </section>
  );
}