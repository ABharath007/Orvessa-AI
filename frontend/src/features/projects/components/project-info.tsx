"use client";

import {
  Home,
  Palette,
  Sparkles,
  Calendar,
} from "lucide-react";

import type { Project } from "../types/project.types";

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({
  project,
}: ProjectInfoProps) {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <h2
        className="
          mb-8
          text-2xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        Project Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <InfoCard
          icon={
            <Home className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          }
          title="Room Type"
          value={project.roomType}
        />

        <InfoCard
          icon={
            <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          }
          title="Interior Style"
          value={project.style}
        />

        <InfoCard
          icon={
            <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />
          }
          title="Color Palette"
          value="Not Selected"
        />

        <InfoCard
          icon={
            <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
          }
          title="Created"
          value={project.createdAt}
        />
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({
  icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-300
        hover:shadow-lg
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-indigo-500
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-white
          shadow-sm
          transition-transform
          duration-300
          group-hover:scale-110
          dark:bg-slate-900
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="
            text-sm
            font-medium
            text-slate-500
            dark:text-slate-400
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            break-words
            text-lg
            font-semibold
            text-slate-900
            dark:text-white
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}