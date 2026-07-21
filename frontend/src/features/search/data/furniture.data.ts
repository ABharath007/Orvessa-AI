import {
  Sofa,
  Bed,
  Armchair,
  Lamp,
  Table,
  Tv,
  DoorOpen,
  CookingPot,
  Trees,
  Archive,
} from "lucide-react";

import type { SearchItem } from "../types/search.types";

export const furnitureSearchData: SearchItem[] = [
  {
    id: 501,
    title: "Furniture",
    description: "Browse premium furniture collection",
    href: "/dashboard/furniture",
    icon: Sofa,
    group: "Furniture",
    type: "page",
    keywords: [
      "furniture",
      "decor",
      "home",
      "interior",
    ],
    priority: 100,
  },

  {
    id: 502,
    title: "Luxury Sofa",
    description: "Modern luxury sofas",
    href: "/dashboard/furniture#sofa",
    icon: Sofa,
    group: "Furniture",
    type: "section",
    keywords: [
      "sofa",
      "couch",
      "living room",
      "seating",
    ],
    priority: 95,
  },

  {
    id: 503,
    title: "Beds",
    description: "Bedroom beds",
    href: "/dashboard/furniture#bed",
    icon: Bed,
    group: "Furniture",
    type: "section",
    keywords: [
      "bed",
      "bedroom",
      "sleep",
      "cot",
    ],
    priority: 95,
  },

  {
    id: 504,
    title: "Dining Table",
    description: "Premium dining tables",
    href: "/dashboard/furniture#table",
    icon: Table,
    group: "Furniture",
    type: "section",
    keywords: [
      "table",
      "dining",
      "wood",
    ],
    priority: 90,
  },

  {
    id: 505,
    title: "Coffee Table",
    description: "Living room coffee tables",
    href: "/dashboard/furniture#coffee-table",
    icon: Table,
    group: "Furniture",
    type: "section",
    keywords: [
      "coffee",
      "center table",
      "living room",
    ],
    priority: 88,
  },

  {
    id: 506,
    title: "Chair",
    description: "Dining and office chairs",
    href: "/dashboard/furniture#chair",
    icon: Armchair,
    group: "Furniture",
    type: "section",
    keywords: [
      "chair",
      "office chair",
      "seat",
    ],
    priority: 92,
  },

  {
    id: 507,
    title: "Wardrobe",
    description: "Bedroom wardrobes",
    href: "/dashboard/furniture#wardrobe",
    icon: Archive,
    group: "Furniture",
    type: "section",
    keywords: [
      "wardrobe",
      "closet",
      "cupboard",
    ],
    priority: 85,
  },

  {
    id: 508,
    title: "TV Unit",
    description: "Entertainment furniture",
    href: "/dashboard/furniture#tv-unit",
    icon: Tv,
    group: "Furniture",
    type: "section",
    keywords: [
      "tv",
      "television",
      "tv stand",
    ],
    priority: 85,
  },

  {
    id: 509,
    title: "Cabinets",
    description: "Kitchen and storage cabinets",
    href: "/dashboard/furniture#cabinet",
    icon: DoorOpen,
    group: "Furniture",
    type: "section",
    keywords: [
      "cabinet",
      "storage",
      "kitchen",
    ],
    priority: 80,
  },

  {
    id: 510,
    title: "Kitchen Storage",
    description: "Kitchen storage solutions",
    href: "/dashboard/furniture#kitchen-storage",
    icon: CookingPot,
    group: "Furniture",
    type: "section",
    keywords: [
      "kitchen",
      "storage",
      "drawers",
    ],
    priority: 78,
  },

  {
    id: 511,
    title: "Lighting",
    description: "Ceiling and wall lights",
    href: "/dashboard/furniture#lighting",
    icon: Lamp,
    group: "Furniture",
    type: "section",
    keywords: [
      "light",
      "lamp",
      "lighting",
      "ceiling",
    ],
    priority: 80,
  },

  {
    id: 512,
    title: "Indoor Plants",
    description: "Decorative indoor plants",
    href: "/dashboard/furniture#plants",
    icon: Trees,
    group: "Furniture",
    type: "section",
    keywords: [
      "plants",
      "green",
      "indoor",
      "decor",
    ],
    priority: 70,
  },
];