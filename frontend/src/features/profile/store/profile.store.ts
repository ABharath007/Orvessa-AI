import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Profile {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  joinedDate: string;
  profileImage: string;
}

interface ProfileStore {
  profile: Profile;

  updateProfile: (
    data: Partial<Profile>
  ) => void;

  updateProfileImage: (
    image: string
  ) => void;

  initializeProfile: (
    fullName: string,
    email: string
  ) => void;
}

export const useProfileStore =
  create<ProfileStore>()(
    persist(
      (set) => ({
        profile: {
          fullName: "",
          email: "",
          phone: "",
          location: "",
          bio: "Welcome to Orvessa AI!",
          joinedDate: "",
          profileImage:
            "https://i.pravatar.cc/300?img=12",
        },

        updateProfile: (data) =>
          set((state) => ({
            profile: {
              ...state.profile,
              ...data,
            },
          })),

        updateProfileImage: (image) =>
          set((state) => ({
            profile: {
              ...state.profile,
              profileImage: image,
            },
          })),

        initializeProfile: (
          fullName,
          email
        ) =>
          set((state) => ({
            profile: {
              ...state.profile,
              fullName,
              email,
              joinedDate:
                state.profile.joinedDate ||
                new Date().toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    year: "numeric",
                  }
                ),
            },
          })),
      }),
      {
        name: "orvessa-profile",
      }
    )
  );