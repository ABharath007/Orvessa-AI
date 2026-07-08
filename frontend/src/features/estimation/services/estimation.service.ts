import { estimationData } from "../mock/estimation.mock";

export const estimationService = {
  async getEstimation() {
    return Promise.resolve(estimationData);
  },
};