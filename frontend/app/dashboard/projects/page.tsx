"use client";

import { ProjectToolbar } from "@/features/projects/components/project-toolbar";
import { ProjectStats } from "@/features/projects/components/project-stats";
import { ProjectGrid } from "@/features/projects/components/project-grid";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          My Projects
        </h1>

        <p className="mt-2 text-slate-500">
          Manage all your AI interior design projects.
        </p>
      </div>

      <ProjectStats />

      <ProjectToolbar />

      <ProjectGrid />
    </div>
  );
}