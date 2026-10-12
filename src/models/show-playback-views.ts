import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the view count during playback. */
export type ShowPlaybackViews = {
  /** Whether an upgrade is required to show the view count during playback. */
  isUpgrade: boolean;
  /** Whether to show the view count during playback. */
  value: boolean;
};

export const showPlaybackViewsSchema: Schema<ShowPlaybackViews> = s.object<ShowPlaybackViews>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
