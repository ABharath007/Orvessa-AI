import { useQuery } from "@tanstack/react-query";
import { estimationService } from "../services/estimation.service";

export function useEstimation() {
  return useQuery({
    queryKey: ["estimation"],
    queryFn: () => estimationService.getEstimation(),
  });
}
