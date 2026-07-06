import { useMutation } from "@tanstack/react-query";
import { uploadService } from "@/services/upload.service";

export function useGenerateDesign() {
  return useMutation({
    mutationFn: uploadService.generateDesign,
  });
}