import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the date when the video was uploaded during playback. */
export type ShowPlaybackUploadedDate = {
  /**
   * Whether an upgrade is required to show the date when the video was uploaded during playback.
   */
  isUpgrade: boolean;
  /** Whether to show the date when the video was uploaded during playback. */
  value: boolean;
};

export const showPlaybackUploadedDateSchema: Schema<ShowPlaybackUploadedDate> =
  s.object<ShowPlaybackUploadedDate>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
