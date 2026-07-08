"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  IndianRupee,
  Heart,
} from "lucide-react";

import { ProjectActions } from "./project-actions";

import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Favorite Badge */}
        {project.isFavorite && (
          <div className="absolute left-3 top-3 rounded-full bg-white p-2 shadow-md">
            <Heart className="h-5 w-5 fill-red-500 text-red-500" />
          </div>
        )}

        {/* Actions */}
        <div className="absolute right-3 top-3">
          <ProjectActions
            projectId={project.id}
            projectTitle={project.title}
            isFavorite={project.isFavorite}
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="space-y-5 p-6">
        {/* Title */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-slate-900">
            {project.title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {project.roomType} • {project.style}
          </p>
        </div>

        {/* Budget + Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-green-600" />

            <span className="font-semibold text-slate-900">
              ₹{project.budget.toLocaleString()}
            </span>
          </div>

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
        </div>

        {/* Updated */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays className="h-4 w-4" />

          <span>Updated {project.updatedAt}</span>
        </div>

        {/* Open Project */}
        <Link
          href={`/dashboard/projects/${project.id}`}
          className="block rounded-xl bg-slate-900 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
        >
          Open Project →
        </Link>
      </div>
    </div>
  );
}