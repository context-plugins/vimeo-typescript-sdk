import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the profile image during playback. */
export type ShowPlaybackProfileImage = {
  /** Whether an upgrade is required to show the profile image during playback. */
  isUpgrade: boolean;
  /** Whether to show the profile image during playback. */
  value: boolean;
};

export const showPlaybackProfileImageSchema: Schema<ShowPlaybackProfileImage> =
  s.object<ShowPlaybackProfileImage>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
