import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the profile image in grid view. */
export type ShowPlaybackGridProfileImage = {
  /** Whether an upgrade is required to show the profile image in grid view. */
  isUpgrade: boolean;
  /** Whether to show the profile image in grid view. */
  value: boolean;
};

export const showPlaybackGridProfileImageSchema: Schema<ShowPlaybackGridProfileImage> =
  s.object<ShowPlaybackGridProfileImage>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
