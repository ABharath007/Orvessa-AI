"use client";

import {
  Heart,
  Download,
  RefreshCcw,
  Share2,
} from "lucide-react";

interface ProjectHeaderProps {
  title: string;
  createdAt: string;
  status: string;
}

export function ProjectHeader({
  title,
  createdAt,
  status,
}: ProjectHeaderProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          Created {createdAt}
        </p>

        <span
          className={`mt-4 inline-flex rounded-full px-4 py-1 text-sm font-semibold ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-slate-100">
          <Heart className="h-5 w-5" />
          Favorite
        </button>

        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-slate-100">
          <Download className="h-5 w-5" />
          Download
        </button>

        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-slate-100">
          <RefreshCcw className="h-5 w-5" />
          Generate Again
        </button>

        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-slate-100">
          <Share2 className="h-5 w-5" />
          Share
        </button>
      </div>
    </div>
  );
}