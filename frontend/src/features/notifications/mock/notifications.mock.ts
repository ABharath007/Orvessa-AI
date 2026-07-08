import type { Notification } from "../types/notifications.types";

export const notificationsData: Notification[] = [
  {
    id: 1,
    title: "AI Design Ready",
    description: "Your Living Room design has been generated.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Project Saved",
    description: "Your Modern Bedroom project was saved.",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 3,
    title: "Furniture Recommendation",
    description: "New IKEA furniture matches your design.",
    time: "Yesterday",
    read: true,
  },
];