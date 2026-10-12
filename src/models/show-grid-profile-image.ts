import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the profile image on each video. */
export type ShowGridProfileImage = {
  /** Whether an upgrade is required to show the profile image on each video. */
  isUpgrade: boolean;
  /** Whether to show the profile image on each video. */
  value: boolean;
};

export const showGridProfileImageSchema: Schema<ShowGridProfileImage> = s.object<ShowGridProfileImage>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
