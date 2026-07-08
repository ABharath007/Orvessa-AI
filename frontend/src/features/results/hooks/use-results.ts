import { useQuery } from "@tanstack/react-query";
import { resultsService } from "../services/results.service";

export function useResults() {
  return useQuery({
    queryKey: ["results"],
    queryFn: () => resultsService.getResults(),
  });
}