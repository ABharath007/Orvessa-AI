import { api } from "@/lib/axios";
import { API_ENDPOINTS } from "@/constants/api-endpoints";

export const projectService = {
  async getProjects() {
    const response = await api.get(
      API_ENDPOINTS.PROJECTS.LIST
    );

    return response.data;
  },

  async getProject(id: number) {
    const response = await api.get(
      API_ENDPOINTS.PROJECTS.DETAILS(id)
    );

    return response.data;
  },
};