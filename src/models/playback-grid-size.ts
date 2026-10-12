import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the grid size configuration for playback view. */
export type PlaybackGridSize = {
  /** Whether an upgrade is required to configure the playback grid size. */
  isUpgrade: boolean;
  /**
   * The grid size configuration for playback view. Possible values include `s` for small, `m` for
   * medium, `l` for large, and `xl` for extra large.
   */
  value: string;
};

export const playbackGridSizeSchema: Schema<PlaybackGridSize> = s.object<PlaybackGridSize>({
  isUpgrade: s.boolean(),
  value: s.string(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
