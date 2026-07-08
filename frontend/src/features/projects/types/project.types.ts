export type ProjectStatus =
  | "Draft"
  | "In Progress"
  | "Completed";

export interface Project {
  id: string;

  title: string;

  roomType: string;

  style: string;

  thumbnail: string;

  budget: number;

  status: ProjectStatus;

  createdAt: string;

  updatedAt: string;

  isFavorite: boolean;
}