import { notificationsData } from "../mock/notifications.mock";

export const notificationsService = {
  async getNotifications() {
    return Promise.resolve(notificationsData);
  },
};