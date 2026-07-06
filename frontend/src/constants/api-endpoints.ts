export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    PROFILE: "/auth/profile",
  },

  DASHBOARD: {
    STATS: "/dashboard/stats",
    RECENT_ACTIVITY: "/dashboard/recent-activity",
  },

  UPLOAD: {
    ROOM: "/upload/room",
    GENERATE: "/upload/generate",
    STATUS: (projectId: number) =>
      `/upload/status/${projectId}`,
  },

  PROJECTS: {
    LIST: "/projects",
    CREATE: "/projects",
    DETAILS: (id: number) => `/projects/${id}`,
    UPDATE: (id: number) => `/projects/${id}`,
    DELETE: (id: number) => `/projects/${id}`,
  },

  GALLERY: {
    DESIGNS: "/gallery/designs",
    FAVORITES: "/gallery/favorites",
    DOWNLOAD: (id: number) => `/gallery/${id}/download`,
    SHARE: (id: number) => `/gallery/${id}/share`,
  },

  ESTIMATION: {
    COST: "/estimation/cost",
  },

  PALETTE: {
    COLORS: "/palette/colors",
  },

  FURNITURE: {
    RECOMMENDATIONS: "/furniture/recommendations",
  },

  PROFILE: {
    DETAILS: "/profile",
    UPDATE: "/profile",
  },

  SETTINGS: {
    UPDATE: "/settings",
  },

  USER: {
    NOTIFICATIONS: "/user/notifications",
  },
} as const;