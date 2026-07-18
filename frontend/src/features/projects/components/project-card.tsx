"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  IndianRupee,
  Heart,
  ArrowRight,
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
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Project Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Favorite Badge */}
        {project.isFavorite && (
          <div className="absolute left-4 top-4 rounded-full bg-white p-2 shadow-lg dark:bg-slate-900">
            <Heart className="h-5 w-5 fill-red-500 text-red-500" />
          </div>
        )}

        {/* Actions */}
        <div className="absolute right-4 top-4">
          <ProjectActions
            projectId={project.id}
            projectTitle={project.title}
            isFavorite={project.isFavorite}
          />
        </div>

        {/* Status */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
              project.status === "Completed"
                ? "bg-green-500/90 text-white"
                : project.status === "In Progress"
                ? "bg-yellow-500/90 text-white"
                : "bg-slate-800/80 text-white"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="space-y-5 p-6">
        {/* Title */}
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {project.roomType} • {project.style}
          </p>
        </div>

        {/* Budget */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-green-600" />

            <span className="font-bold text-slate-900 dark:text-white">
              ₹{project.budget.toLocaleString()}
            </span>
          </div>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            Budget
          </span>
        </div>

        {/* Updated */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <CalendarDays className="h-4 w-4" />

          <span>Updated {project.updatedAt}</span>
        </div>

        {/* Open Project */}
        <Link
          href={`/dashboard/projects/${project.id}`}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-indigo-600
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-indigo-700
            hover:shadow-lg
          "
        >
          Open Project

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </div>
  );
}