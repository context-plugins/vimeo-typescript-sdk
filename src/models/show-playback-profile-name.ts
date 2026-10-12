import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the profile name during playback. */
export type ShowPlaybackProfileName = {
  /** Whether an upgrade is required to show the profile name during playback. */
  isUpgrade: boolean;
  /** Whether to show the profile name during playback. */
  value: boolean;
};

export const showPlaybackProfileNameSchema: Schema<ShowPlaybackProfileName> =
  s.object<ShowPlaybackProfileName>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
