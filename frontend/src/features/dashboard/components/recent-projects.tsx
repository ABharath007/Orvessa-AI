"use client";

import Image from "next/image";
import Link from "next/link";

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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Projects
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest AI interior designs
          </p>
        </div>

        <Link
          href="/dashboard/projects"
          className="text-sm font-semibold text-slate-900 hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {recentProjects.map((project) => (
          <Link
            key={project.id}
            href={`/dashboard/projects/${project.id}`}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={70}
                height={70}
                className="rounded-xl object-cover"
              />

              <div>
                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {project.roomType} • {project.style}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : project.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {project.status}
              </span>

              <p className="mt-2 text-sm text-slate-500">
                ₹{project.budget.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}