import { dashboardSearchData } from "./dashboard.data";
import { settingsSearchData } from "./settings.data";
import { profileSearchData } from "./profile.data";
import { uploadSearchData } from "./upload.data";
import { gallerySearchData } from "./gallery.data";
import { furnitureSearchData } from "./furniture.data";
import { projectsSearchData } from "./projects.data";

export const searchData = [
  ...dashboardSearchData,
  ...settingsSearchData,
  ...profileSearchData,
  ...uploadSearchData,
...gallerySearchData,
    ...furnitureSearchData,
    ...projectsSearchData,
];