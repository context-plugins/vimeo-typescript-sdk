import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the date when the video was added during playback. */
export type ShowPlaybackAddedDate = {
  /** Whether an upgrade is required to show the date when the video was added during playback. */
  isUpgrade: boolean;
  /** Whether to show the date when the video was added during playback. */
  value: boolean;
};

export const showPlaybackAddedDateSchema: Schema<ShowPlaybackAddedDate> = s.object<ShowPlaybackAddedDate>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
