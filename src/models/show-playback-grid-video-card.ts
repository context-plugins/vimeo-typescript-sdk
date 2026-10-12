import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the video card in grid view. */
export type ShowPlaybackGridVideoCard = {
  /** Whether an upgrade is required to show the video card in grid view. */
  isUpgrade: boolean;
  /** Whether to show the video card in grid view. */
  value: boolean;
};

export const showPlaybackGridVideoCardSchema: Schema<ShowPlaybackGridVideoCard> =
  s.object<ShowPlaybackGridVideoCard>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
