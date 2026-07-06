"use client";

import { mockProjects } from "../mock/projects.mock";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {mockProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}