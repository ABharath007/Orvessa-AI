"use client";

import { FolderOpen, PlusCircle } from "lucide-react";

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
      <div
        className="
          flex
          h-80
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-slate-50
          text-center
          transition-all
          duration-300
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <div className="rounded-full bg-slate-200 p-5 dark:bg-slate-800">
          <FolderOpen className="h-10 w-10 text-slate-500 dark:text-slate-300" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
          No Projects Found
        </h3>

        <p className="mt-3 max-w-md text-slate-500 dark:text-slate-400">
          We couldn't find any projects matching your search or filter.
          Try changing your search or create a new project.
        </p>

        <button
          className="
            mt-6
            flex
            items-center
            gap-2
            rounded-2xl
            bg-indigo-600
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-indigo-700
            hover:shadow-lg
          "
        >
          <PlusCircle className="h-5 w-5" />
          Create Project
        </button>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
    >
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}