import {
  ImageIcon,
  Home,
  Bed,
  ChefHat,
  Bath,
  Sofa,
  Building2,
  Sparkles,
  Palette,
} from "lucide-react";

import type { SearchItem } from "../types/search.types";

export const gallerySearchData: SearchItem[] = [
  {
    id: 401,
    title: "AI Gallery",
    description: "Browse AI generated interiors",
    href: "/dashboard/gallery",
    icon: ImageIcon,
    group: "Gallery",
    type: "page",
    keywords: [
      "gallery",
      "designs",
      "ai",
      "images",
      "interior",
    ],
    priority: 100,
  },

  // ROOMS

  {
    id: 402,
    title: "Living Room",
    description: "Living room inspirations",
    href: "/dashboard/gallery#living-room",
    icon: Home,
    group: "Gallery",
    type: "section",
    keywords: [
      "living",
      "hall",
      "family room",
      "sofa",
      "tv",
    ],
    priority: 95,
  },

  {
    id: 403,
    title: "Bedroom",
    description: "Bedroom inspirations",
    href: "/dashboard/gallery#bedroom",
    icon: Bed,
    group: "Gallery",
    type: "section",
    keywords: [
      "bedroom",
      "bed",
      "sleep",
      "master bedroom",
    ],
    priority: 95,
  },

  {
    id: 404,
    title: "Kitchen",
    description: "Kitchen inspirations",
    href: "/dashboard/gallery#kitchen",
    icon: ChefHat,
    group: "Gallery",
    type: "section",
    keywords: [
      "kitchen",
      "cooking",
      "chef",
      "cabinets",
    ],
    priority: 90,
  },

  {
    id: 405,
    title: "Bathroom",
    description: "Bathroom inspirations",
    href: "/dashboard/gallery#bathroom",
    icon: Bath,
    group: "Gallery",
    type: "section",
    keywords: [
      "bathroom",
      "washroom",
      "toilet",
      "bath",
    ],
    priority: 85,
  },

  {
    id: 406,
    title: "Office",
    description: "Office inspirations",
    href: "/dashboard/gallery#office",
    icon: Building2,
    group: "Gallery",
    type: "section",
    keywords: [
      "office",
      "workspace",
      "desk",
      "study",
    ],
    priority: 85,
  },

  // STYLES

  {
    id: 407,
    title: "Modern Style",
    description: "Modern interiors",
    href: "/dashboard/gallery#modern",
    icon: Sparkles,
    group: "Gallery",
    type: "section",
    keywords: [
      "modern",
      "minimal",
      "latest",
      "simple",
    ],
    priority: 90,
  },

  {
    id: 408,
    title: "Luxury Style",
    description: "Premium luxury interiors",
    href: "/dashboard/gallery#luxury",
    icon: Sparkles,
    group: "Gallery",
    type: "section",
    keywords: [
      "luxury",
      "premium",
      "expensive",
      "royal",
    ],
    priority: 90,
  },

  {
    id: 409,
    title: "Scandinavian",
    description: "Scandinavian interiors",
    href: "/dashboard/gallery#scandinavian",
    icon: Palette,
    group: "Gallery",
    type: "section",
    keywords: [
      "scandinavian",
      "nordic",
      "wood",
      "white",
    ],
    priority: 85,
  },

  {
    id: 410,
    title: "Minimalist",
    description: "Minimal home designs",
    href: "/dashboard/gallery#minimal",
    icon: Palette,
    group: "Gallery",
    type: "section",
    keywords: [
      "minimal",
      "minimalist",
      "clean",
      "simple",
    ],
    priority: 85,
  },

  {
    id: 411,
    title: "Industrial",
    description: "Industrial interiors",
    href: "/dashboard/gallery#industrial",
    icon: Palette,
    group: "Gallery",
    type: "section",
    keywords: [
      "industrial",
      "factory",
      "brick",
      "metal",
    ],
    priority: 80,
  },

  {
    id: 412,
    title: "Contemporary",
    description: "Contemporary interiors",
    href: "/dashboard/gallery#contemporary",
    icon: Palette,
    group: "Gallery",
    type: "section",
    keywords: [
      "contemporary",
      "modern contemporary",
    ],
    priority: 80,
  },

  {
    id: 413,
    title: "Classic",
    description: "Classic interiors",
    href: "/dashboard/gallery#classic",
    icon: Palette,
    group: "Gallery",
    type: "section",
    keywords: [
      "classic",
      "traditional",
      "vintage",
    ],
    priority: 75,
  },

  {
    id: 414,
    title: "Bohemian",
    description: "Bohemian interiors",
    href: "/dashboard/gallery#bohemian",
    icon: Palette,
    group: "Gallery",
    type: "section",
    keywords: [
      "boho",
      "bohemian",
      "artistic",
    ],
    priority: 75,
  },

  {
    id: 415,
    title: "Coastal",
    description: "Coastal interiors",
    href: "/dashboard/gallery#coastal",
    icon: Palette,
    group: "Gallery",
    type: "section",
    keywords: [
      "coastal",
      "beach",
      "ocean",
      "sea",
    ],
    priority: 70,
  },
];