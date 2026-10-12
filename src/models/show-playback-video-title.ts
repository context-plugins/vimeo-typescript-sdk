import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the video title during playback. */
export type ShowPlaybackVideoTitle = {
  /** Whether an upgrade is required to show the video title during playback. */
  isUpgrade: boolean;
  /** Whether to show the video title during playback. */
  value: boolean;
};

export const showPlaybackVideoTitleSchema: Schema<ShowPlaybackVideoTitle> = s.object<ShowPlaybackVideoTitle>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
