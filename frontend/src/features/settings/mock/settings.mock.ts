import type { UserSettings } from "../types/settings.types";

export const settingsData: UserSettings = {
  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
  },

  appearance: {
    theme: "light",
    language: "English",
  },

  security: {
    twoFactorEnabled: false,
  },
};