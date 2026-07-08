import { profileData } from "../mock/profile.mock";

export const profileService = {
  async getProfile() {
    return Promise.resolve(profileData);
  },
};