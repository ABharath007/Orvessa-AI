"use client";

import { useProjectStore } from "@/features/projects/store/project.store";

export function useDashboard() {
  const projects = useProjectStore(
    (state) => state.projects
  );

  const totalProjects = projects.length;

  const completedProjects =
    projects.filter(
      (project) => project.status === "Completed"
    ).length;

  const favoriteProjects =
    projects.filter(
      (project) => project.isFavorite
    ).length;

  const totalBudget =
    projects.reduce(
      (sum, project) => sum + project.budget,
      0
    );

  return {
    totalProjects,
    completedProjects,
    favoriteProjects,
    totalBudget,
    projects,
  };
}