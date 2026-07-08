import { settingsData } from "../mock/settings.mock";

export const settingsService = {
  async getSettings() {
    return Promise.resolve(settingsData);
  },
};