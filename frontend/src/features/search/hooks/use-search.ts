import { useQuery } from "@tanstack/react-query";
import { searchService } from "../services/search.service";

export function useSearch() {
  return useQuery({
    queryKey: ["search"],
    queryFn: () => searchService.search(),
  });
}