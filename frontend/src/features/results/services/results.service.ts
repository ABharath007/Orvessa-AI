import { resultData } from "../mock/results.mock";

export const resultsService = {
  async getResults() {
    return Promise.resolve(resultData);
  },
};