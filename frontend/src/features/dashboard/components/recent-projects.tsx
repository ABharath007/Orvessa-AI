"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { useDashboard } from "../hooks/use-dashboard";

export function RecentProjects() {
  const { projects } = useDashboard();

  const recentProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
    )
    .slice(0, 5);

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Recent Projects
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your latest AI interior designs
          </p>
        </div>

        <Link
          href="/dashboard/projects"
          className="flex items-center gap-2 font-semibold text-indigo-600 transition hover:gap-3 dark:text-indigo-400"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Empty State */}
      {recentProjects.length === 0 && (
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-slate-300
            py-12
            text-center
            dark:border-slate-700
          "
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            No Projects Yet
          </h3>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Create your first AI interior design project.
          </p>
        </div>
      )}

      {/* Projects */}
      <div className="space-y-4">
        {recentProjects.map((project) => (
          <Link
            key={project.id}
            href={`/dashboard/projects/${project.id}`}
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-md
              dark:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={80}
                height={80}
                className="
                  h-20
                  w-20
                  rounded-2xl
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {project.roomType} • {project.style}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <CalendarDays className="h-4 w-4" />

                  Updated {project.updatedAt}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                    : project.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                }`}
              >
                {project.status}
              </span>

              <p className="mt-3 font-semibold text-slate-900 dark:text-white">
                ₹{project.budget.toLocaleString("en-IN")}
              </p>

              <ArrowRight
                className="
                  ml-auto
                  mt-3
                  h-4
                  w-4
                  text-slate-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
