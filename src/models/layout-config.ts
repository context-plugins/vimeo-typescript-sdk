import { s, type Schema } from "../core/index.js";
import { gridSizeSchema, type GridSize } from "./grid-size.js";
import { showGridProfileImageSchema, type ShowGridProfileImage } from "./show-grid-profile-image.js";
import { showGridProfileNameSchema, type ShowGridProfileName } from "./show-grid-profile-name.js";
import { showGridSectionNameSchema, type ShowGridSectionName } from "./show-grid-section-name.js";
import { showGridVideoCountSchema, type ShowGridVideoCount } from "./show-grid-video-count.js";
import { showGridVideoTitlesSchema, type ShowGridVideoTitles } from "./show-grid-video-titles.js";

export type LayoutConfig = {
  gridSize: GridSize;
  showGridProfileImage: ShowGridProfileImage;
  showGridProfileName: ShowGridProfileName;
  showGridSectionName: ShowGridSectionName;
  showGridVideoCount: ShowGridVideoCount;
  showGridVideoTitles: ShowGridVideoTitles;
};

export const layoutConfigSchema: Schema<LayoutConfig> = s.object<LayoutConfig>({
  gridSize: gridSizeSchema,
  showGridProfileImage: showGridProfileImageSchema,
  showGridProfileName: showGridProfileNameSchema,
  showGridSectionName: showGridSectionNameSchema,
  showGridVideoCount: showGridVideoCountSchema,
  showGridVideoTitles: showGridVideoTitlesSchema,
  _keysMap: {
    gridSize: "grid_size",
    showGridProfileImage: "show_grid_profile_image",
    showGridProfileName: "show_grid_profile_name",
    showGridSectionName: "show_grid_section_name",
    showGridVideoCount: "show_grid_video_count",
    showGridVideoTitles: "show_grid_video_titles",
  },
});
