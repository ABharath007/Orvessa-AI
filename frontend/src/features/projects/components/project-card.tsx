"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/dashboard/projects/${project.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={400}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="text-sm text-slate-500">
            {project.roomType}
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Style:</strong> {project.style}
          </p>

          <p>
            <strong>Palette:</strong> {project.colorPalette}
          </p>

          <p>
            <strong>Created:</strong> {project.createdAt}
          </p>

          <div>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm font-medium text-slate-600 transition group-hover:text-slate-900">
            View Project →
          </p>
        </div>
      </div>
    </Link>
  );
}