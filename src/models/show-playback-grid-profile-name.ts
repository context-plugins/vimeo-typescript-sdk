import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the profile name in grid view. */
export type ShowPlaybackGridProfileName = {
  /** Whether an upgrade is required to show the profile name in grid view. */
  isUpgrade: boolean;
  /** Whether to show the profile name in grid view. */
  value: boolean;
};

export const showPlaybackGridProfileNameSchema: Schema<ShowPlaybackGridProfileName> =
  s.object<ShowPlaybackGridProfileName>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
