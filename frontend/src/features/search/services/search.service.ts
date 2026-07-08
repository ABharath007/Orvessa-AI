import { searchData } from "../mock/search.mock";

export const searchService = {
  async search() {
    return Promise.resolve(searchData);
  },
};