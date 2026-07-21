const STORAGE_KEY = "orvessa_recent_searches";

export function getRecentSearches(): number[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function addRecentSearch(id: number) {
  if (typeof window === "undefined") return;

  const current = getRecentSearches();

  const updated = [
    id,
    ...current.filter((item) => item !== id),
  ].slice(0, 8);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export function clearRecentSearches() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}