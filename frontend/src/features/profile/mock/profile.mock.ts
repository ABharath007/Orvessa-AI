import type { ProfileData } from "../types/profile.types";

export const profileData: ProfileData = {
  profile: {
    id: 1,
    fullName: "Kiran",
    email: "kiran@example.com",
    phone: "+91 9876543210",
    bio: "AI & Data Science student passionate about AI-powered Interior Design.",
    location: "Hyderabad, India",
    profileImage: "https://i.pravatar.cc/300?img=12",
    joinedDate: "January 2026",
  },

  stats: {
    projects: 12,
    favorites: 8,
    generatedDesigns: 37,
  },

  activities: [
    {
      id: 1,
      title: "Generated Living Room",
      description: "Modern Scandinavian Style",
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "Saved Design",
      description: "Luxury Bedroom",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Downloaded Design",
      description: "Minimal Kitchen",
      date: "3 days ago",
    },
  ],
};