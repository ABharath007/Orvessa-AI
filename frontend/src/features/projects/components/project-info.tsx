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
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Project Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <InfoCard
          icon={<Home className="h-6 w-6" />}
          title="Room Type"
          value={project.roomType}
        />

        <InfoCard
          icon={<Sparkles className="h-6 w-6" />}
          title="Interior Style"
          value={project.style}
        />

        <InfoCard
          icon={<Palette className="h-6 w-6" />}
          title="Color Palette"
          value="Not Selected"
        />

        <InfoCard
          icon={<Calendar className="h-6 w-6" />}
          title="Created"
          value={project.createdAt}
        />
      </div>
    </div>
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
    <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-5">
      <div className="rounded-lg bg-slate-900 p-3 text-white">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-semibold">
          {value}
        </p>
      </div>
    </div>
  );
}