import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about enabling the like functionality during playback. */
export type EnableLike = {
  /** Whether an upgrade is required to enable the like functionality during playback. */
  isUpgrade: boolean;
  /** Whether to enable the like functionality during playback. */
  value: boolean;
};

export const enableLikeSchema: Schema<EnableLike> = s.object<EnableLike>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
