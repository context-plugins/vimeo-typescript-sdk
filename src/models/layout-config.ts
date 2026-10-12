import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gridSizeSchema, type GridSize } from "./grid-size.js";
import { showGridProfileImageSchema, type ShowGridProfileImage } from "./show-grid-profile-image.js";
import { showGridProfileNameSchema, type ShowGridProfileName } from "./show-grid-profile-name.js";
import { showGridSectionNameSchema, type ShowGridSectionName } from "./show-grid-section-name.js";
import { showGridVideoCountSchema, type ShowGridVideoCount } from "./show-grid-video-count.js";
import { showGridVideoTitlesSchema, type ShowGridVideoTitles } from "./show-grid-video-titles.js";

export type LayoutConfig = {
  /** Information about the grid size configuration. */
  gridSize: GridSize;
  /** Information about showing the profile image on each video. */
  showGridProfileImage: ShowGridProfileImage;
  /** Information about showing the profile name on each video. */
  showGridProfileName: ShowGridProfileName;
  /** Information about showing the section names. */
  showGridSectionName: ShowGridSectionName;
  /** Information about showing the video count above the video list. */
  showGridVideoCount: ShowGridVideoCount;
  /** Information about showing the video titles below thumbnails. */
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
