export interface UserProfile {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  profileImage: string;
  joinedDate: string;
}

export interface UserStats {
  projects: number;
  favorites: number;
  generatedDesigns: number;
}

export interface UserActivity {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface ProfileData {
  profile: UserProfile;
  stats: UserStats;
  activities: UserActivity[];
}