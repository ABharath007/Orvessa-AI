import {
  User,
  Mail,
  Phone,
  Camera,
  MapPin,
  Briefcase,
  GraduationCap,
  Shield,
} from "lucide-react";

import type { SearchItem } from "../types/search.types";

export const profileSearchData: SearchItem[] = [
  {
    id: 201,
    title: "Profile",
    description: "Manage your profile",
    href: "/dashboard/profile",
    icon: User,
    group: "Profile",
    type: "page",
    keywords: [
      "profile",
      "account",
      "user",
      "me",
    ],
    priority: 100,
  },

  {
    id: 202,
    title: "Profile Picture",
    description: "Change your avatar",
    href: "/dashboard/profile#avatar",
    icon: Camera,
    group: "Profile",
    type: "setting",
    section: "Avatar",
    keywords: [
      "avatar",
      "photo",
      "picture",
      "image",
    ],
    priority: 95,
  },

  {
    id: 203,
    title: "Email Address",
    description: "Manage your email",
    href: "/dashboard/profile#email",
    icon: Mail,
    group: "Profile",
    type: "setting",
    keywords: [
      "email",
      "mail",
      "gmail",
      "address",
    ],
    priority: 95,
  },

  {
    id: 204,
    title: "Phone Number",
    description: "Update phone number",
    href: "/dashboard/profile#phone",
    icon: Phone,
    group: "Profile",
    type: "setting",
    keywords: [
      "phone",
      "mobile",
      "contact",
      "number",
    ],
    priority: 90,
  },

  {
    id: 205,
    title: "Location",
    description: "Manage location",
    href: "/dashboard/profile#location",
    icon: MapPin,
    group: "Profile",
    type: "setting",
    keywords: [
      "location",
      "country",
      "city",
      "address",
    ],
    priority: 80,
  },

  {
    id: 206,
    title: "Occupation",
    description: "Professional details",
    href: "/dashboard/profile#occupation",
    icon: Briefcase,
    group: "Profile",
    type: "setting",
    keywords: [
      "job",
      "occupation",
      "career",
      "work",
    ],
    priority: 75,
  },

  {
    id: 207,
    title: "Education",
    description: "Educational information",
    href: "/dashboard/profile#education",
    icon: GraduationCap,
    group: "Profile",
    type: "setting",
    keywords: [
      "education",
      "college",
      "degree",
      "university",
    ],
    priority: 70,
  },

  {
    id: 208,
    title: "Privacy",
    description: "Privacy settings",
    href: "/dashboard/profile#privacy",
    icon: Shield,
    group: "Profile",
    type: "section",
    keywords: [
      "privacy",
      "security",
      "visibility",
    ],
    priority: 85,
  },
];