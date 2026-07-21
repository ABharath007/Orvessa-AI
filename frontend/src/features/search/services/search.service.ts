import { searchData } from "../data";
import type { SearchItem } from "../types/search.types";

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) {
    return searchData
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      .slice(0, 20);
  }

  const q = query.toLowerCase();

  return searchData
    .map((item) => {
      let score = 0;

      // Exact title match
      if (item.title.toLowerCase() === q) score += 100;

      // Title starts with query
      if (item.title.toLowerCase().startsWith(q)) score += 80;

      // Title contains query
      if (item.title.toLowerCase().includes(q)) score += 60;

      // Description
      if (item.description.toLowerCase().includes(q)) score += 30;

      // Keywords
      item.keywords.forEach((keyword) => {
        if (keyword.toLowerCase() === q) score += 50;
        else if (keyword.toLowerCase().includes(q)) score += 20;
      });

      score += item.priority ?? 0;

      return {
        item,
        score,
      };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.item);
}