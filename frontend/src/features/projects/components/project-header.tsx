"use client";

import {
  Heart,
  Download,
  RefreshCcw,
  Share2,
  CalendarDays,
} from "lucide-react";

import type { Project } from "../types/project.types";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({
  project,
}: ProjectHeaderProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <CalendarDays className="h-5 w-5" />

              <span>Created {project.createdAt}</span>
            </div>
          </div>

          <span
            className={`inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold ${
              project.status === "Completed"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : project.status === "In Progress"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-slate-700 transition-all hover:bg-slate-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <Heart
              className={`h-5 w-5 ${
                project.isFavorite
                  ? "fill-red-500 text-red-500"
                  : ""
              }`}
            />

            <span>
              {project.isFavorite
                ? "Favorited"
                : "Favorite"}
            </span>
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-slate-700 transition-all hover:bg-slate-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <Download className="h-5 w-5" />

            <span>Download</span>
          </button>

          <button className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg">
            <RefreshCcw className="h-5 w-5" />

            <span>Generate Again</span>
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-slate-700 transition-all hover:bg-slate-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <Share2 className="h-5 w-5" />

            <span>Share</span>
          </button>
        </div>
      </div>
    </section>
  );
}