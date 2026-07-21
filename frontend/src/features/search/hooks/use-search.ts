import { useMemo } from "react";

import { searchItems } from "../services/search.service";

export function useSearch(query: string) {
  return useMemo(() => {
    return searchItems(query);
  }, [query]);
}