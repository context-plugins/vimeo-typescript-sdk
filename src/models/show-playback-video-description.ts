import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the video description during playback. */
export type ShowPlaybackVideoDescription = {
  /** Whether an upgrade is required to show the video description during playback. */
  isUpgrade: boolean;
  /** Whether to show the video description during playback. */
  value: boolean;
};

export const showPlaybackVideoDescriptionSchema: Schema<ShowPlaybackVideoDescription> =
  s.object<ShowPlaybackVideoDescription>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
