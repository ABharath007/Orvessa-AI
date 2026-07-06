import { useQuery } from "@tanstack/react-query";
import { projectService } from "@/services/project.service";

export function useProject(id: number) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => projectService.getProject(id),
    enabled: !!id,
  });
}
