import { api } from "@/lib/axios";
import { API_ENDPOINTS } from "../constants/api-endpoints";

export const uploadService = {
  async uploadRoom(formData: FormData) {
    const response = await api.post(
      API_ENDPOINTS.UPLOAD.ROOM,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  async generateDesign(projectId: number) {
    const response = await api.post(
      API_ENDPOINTS.UPLOAD.GENERATE,
      {
        projectId,
      }
    );

    return response.data;
  },
};