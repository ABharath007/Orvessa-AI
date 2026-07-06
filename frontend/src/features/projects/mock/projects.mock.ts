import type { Project } from "../types/project.types";

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Modern Living Room",
    roomType: "Living Room",
    style: "Modern",
    colorPalette: "Neutral",
    thumbnail: "https://picsum.photos/600/400?random=21",
    createdAt: "Today",
    status: "Completed",
  },
  {
    id: 2,
    title: "Luxury Bedroom",
    roomType: "Bedroom",
    style: "Luxury",
    colorPalette: "Warm",
    thumbnail: "https://picsum.photos/600/400?random=22",
    createdAt: "Yesterday",
    status: "Completed",
  },
  {
    id: 3,
    title: "Minimal Kitchen",
    roomType: "Kitchen",
    style: "Minimal",
    colorPalette: "White",
    thumbnail: "https://picsum.photos/600/400?random=23",
    createdAt: "2 days ago",
    status: "Generating",
  },
];