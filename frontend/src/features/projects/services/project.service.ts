import { projectsData } from "../mock/projects.mock";
import type { Project } from "../types/project.types";

export const projectService = {
  async getProjects(): Promise<Project[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(projectsData);
      }, 500);
    });
  },

  async getProject(id: string): Promise<Project | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          projectsData.find(
            (project) => project.id === id
          )
        );
      }, 300);
    });
  },
  async createProject(project: Project): Promise<Project> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 500);
  });
},

async updateProject(project: Project): Promise<Project> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(project);
    }, 500);
  });
},

async deleteProject(id: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
},
};