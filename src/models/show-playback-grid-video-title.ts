import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the video title in grid view. */
export type ShowPlaybackGridVideoTitle = {
  /** Whether an upgrade is required to show the video title in grid view. */
  isUpgrade: boolean;
  /** Whether to show the video title in grid view. */
  value: boolean;
};

export const showPlaybackGridVideoTitleSchema: Schema<ShowPlaybackGridVideoTitle> =
  s.object<ShowPlaybackGridVideoTitle>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
