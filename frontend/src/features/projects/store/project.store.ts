import { create } from "zustand";

import { projectsData } from "../mock/projects.mock";
import type { Project } from "../types/project.types";

export type ProjectFilter =
  | "All"
  | "Completed"
  | "In Progress"
  | "Draft";

interface ProjectStore {
  search: string;
  filter: ProjectFilter;

  projects: Project[];

  setSearch: (value: string) => void;

  setFilter: (value: ProjectFilter) => void;

  addProject: (project: Project) => void;

  removeProject: (id: string) => void;

  renameProject: (id: string, title: string) => void;

  duplicateProject: (id: string) => void;

  toggleFavorite: (id: string) => void;

}

export const useProjectStore = create<ProjectStore>((set) => ({
  search: "",

  filter: "All",

  projects: projectsData,

  setSearch: (search) =>
    set({
      search,
    }),

  setFilter: (filter) =>
    set({
      filter,
    }),

  addProject: (project) =>
    set((state) => ({
      projects: [project, ...state.projects],
    })),

  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter(
        (project) => project.id !== id
      ),
    })),

    renameProject: (id, title) =>
  set((state) => ({
    projects: state.projects.map((project) =>
      project.id === id
        ? {
            ...project,
            title,
            updatedAt: new Date()
              .toISOString()
              .split("T")[0],
          }
        : project
    ),
  })),

  duplicateProject: (id) =>
  set((state) => {
    const project = state.projects.find((p) => p.id === id);

    if (!project) return state;

    const duplicatedProject = {
      ...project,
      id: crypto.randomUUID(),
      title: `${project.title} (Copy)`,
      createdAt: new Date()
        .toISOString()
        .split("T")[0],
      updatedAt: new Date()
        .toISOString()
        .split("T")[0],
      isFavorite: false,
    };

    return {
      projects: [duplicatedProject, ...state.projects],
    };
  }),

  toggleFavorite: (id) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id
          ? {
              ...project,
              isFavorite: !project.isFavorite,
            }
          : project
      ),
    })),
}));