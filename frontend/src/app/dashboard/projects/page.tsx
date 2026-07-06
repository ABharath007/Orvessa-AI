"use client";

import { ProjectGrid } from "@/features/projects/components/project-grid";
export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div>
        <h1 className="text-4xl font-bold">
          My Projects
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all your AI interior design projects.
        </p>
      </div>

      <ProjectGrid />
    </div>
  );
}
