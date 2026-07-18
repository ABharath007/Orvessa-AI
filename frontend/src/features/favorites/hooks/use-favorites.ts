"use client";

import { useFavoritesStore } from "../store/favorites.store";

export function useFavorites() {
  const {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  } = useFavoritesStore();

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  };
}
