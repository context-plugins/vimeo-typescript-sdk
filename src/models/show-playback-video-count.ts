import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the video count during playback. */
export type ShowPlaybackVideoCount = {
  /** Whether an upgrade is required to show the video count during playback. */
  isUpgrade: boolean;
  /** Whether to show the video count during playback. */
  value: boolean;
};

export const showPlaybackVideoCountSchema: Schema<ShowPlaybackVideoCount> = s.object<ShowPlaybackVideoCount>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
