"use client";

import { ProjectCard } from "./project-card";

import { useProjectStore } from "../store/project.store";

export function ProjectGrid() {
  const {
    projects,
    search,
    filter,
  } = useProjectStore();

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      project.roomType
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      project.style
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      project.status === filter;

    return matchesSearch && matchesFilter;
  });

  if (!filteredProjects.length) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
        <div className="text-center">
          <h3 className="text-xl font-semibold">
            No Projects Found
          </h3>

          <p className="mt-2 text-slate-500">
            Create a new project or change your search/filter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}