import { create } from "zustand";

export interface Notification {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

interface NotificationStore {
  notifications: Notification[];

  addNotification: (
    title: string,
    description: string
  ) => void;

  removeNotification: (id: string) => void;

  clearNotifications: () => void;
}

export const useNotificationStore =
  create<NotificationStore>((set) => ({
    notifications: [],

    addNotification: (title, description) =>
      set((state) => ({
        notifications: [
          {
            id: crypto.randomUUID(),
            title,
            description,
            createdAt: new Date().toLocaleTimeString(),
          },
          ...state.notifications,
        ],
      })),

    removeNotification: (id) =>
      set((state) => ({
        notifications: state.notifications.filter(
          (n) => n.id !== id
        ),
      })),

    clearNotifications: () =>
      set({
        notifications: [],
      }),
  }));