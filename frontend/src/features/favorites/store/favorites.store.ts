"use client";

import { create } from "zustand";

export interface FavoriteDesign {
  id: string;
  image: string;
  title: string;
}

interface FavoritesStore {
  favorites: FavoriteDesign[];

  isFavorite: (id: string) => boolean;

  addFavorite: (item: FavoriteDesign) => void;

  removeFavorite: (id: string) => void;

  toggleFavorite: (item: FavoriteDesign) => void;

  clearFavorites: () => void;
}

export const useFavoritesStore =
  create<FavoritesStore>((set, get) => ({
    favorites: [],

    isFavorite: (id) =>
      get().favorites.some((item) => item.id === id),

    addFavorite: (item) =>
      set((state) => ({
        favorites: [...state.favorites, item],
      })),

    removeFavorite: (id) =>
      set((state) => ({
        favorites: state.favorites.filter(
          (item) => item.id !== id
        ),
      })),

    toggleFavorite: (item) => {
      const exists = get().favorites.some(
        (f) => f.id === item.id
      );

      if (exists) {
        get().removeFavorite(item.id);
      } else {
        get().addFavorite(item);
      }
    },

    clearFavorites: () =>
      set({
        favorites: [],
      }),
  }));
  