import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the video titles below thumbnails. */
export type ShowGridVideoTitles = {
  /** Whether an upgrade is required to show the video titles below thumbnails. */
  isUpgrade: boolean;
  /** Whether to show the video titles below thumbnails. */
  value: boolean;
};

export const showGridVideoTitlesSchema: Schema<ShowGridVideoTitles> = s.object<ShowGridVideoTitles>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
