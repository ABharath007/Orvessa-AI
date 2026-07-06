import { create } from "zustand";
import type { Design } from "../types/gallery.types";

interface GalleryState {
  favorites: Design[];

  addFavorite: (design: Design) => void;

  removeFavorite: (id: number) => void;

  isFavorite: (id: number) => boolean;
}

export const useGalleryStore = create<GalleryState>((set, get) => ({
  favorites: [],

  addFavorite: (design) => {
    const exists = get().favorites.some(
      (item) => item.id === design.id
    );

    if (!exists) {
      set((state) => ({
        favorites: [...state.favorites, design],
      }));
    }
  },

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (item) => item.id !== id
      ),
    })),

  isFavorite: (id) =>
    get().favorites.some((item) => item.id === id),
}));