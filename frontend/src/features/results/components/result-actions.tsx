"use client";

import {
  Download,
  Heart,
  RefreshCcw,
  Share2,
} from "lucide-react";

export function ResultActions() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">
          <Download className="h-5 w-5" />
          Download
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100">
          <Heart className="h-5 w-5" />
          Save
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100">
          <RefreshCcw className="h-5 w-5" />
          Regenerate
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100">
          <Share2 className="h-5 w-5" />
          Share
        </button>
      </div>
    </div>
  );
}