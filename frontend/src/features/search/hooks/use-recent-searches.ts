"use client";

import { useEffect, useState } from "react";

import { searchData } from "../data";

import {
  getRecentSearches,
} from "../services/recent-search.service";

export function useRecentSearches() {
  const [recent, setRecent] = useState(
    searchData.slice(0, 5)
  );

  useEffect(() => {
    const ids = getRecentSearches();

    const results = ids
      .map((id) =>
        searchData.find((item) => item.id === id)
      )
      .filter(Boolean);

    if (results.length) {
      setRecent(results as typeof searchData);
    }
  }, []);

  return recent;
}