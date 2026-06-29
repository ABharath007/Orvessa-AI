export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PROFILE: "/auth/profile",
  },

  DASHBOARD: {
    STATS: "/dashboard/stats",
  },

  UPLOAD: {
    ROOM: "/upload/room",
  },

  GALLERY: {
    DESIGNS: "/gallery/designs",
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
  },

  SETTINGS: {
    UPDATE: "/settings",
  },
} as const;