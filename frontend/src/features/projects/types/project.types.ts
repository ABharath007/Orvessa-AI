export interface Project {
  id: number;
  title: string;
  roomType: string;
  style: string;
  colorPalette: string;
  thumbnail: string;
  createdAt: string;
  status: "Generating" | "Completed";
}