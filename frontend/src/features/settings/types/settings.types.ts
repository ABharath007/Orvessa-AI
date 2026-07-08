export interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  marketingEmails: boolean;
}

export interface AppearanceSettings {
  theme: "light" | "dark" | "system";
  language: string;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
}

export interface UserSettings {
  notifications: NotificationSettings;
  appearance: AppearanceSettings;
  security: SecuritySettings;
}