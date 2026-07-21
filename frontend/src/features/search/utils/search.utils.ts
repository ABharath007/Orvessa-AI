export function normalizeSearch(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}