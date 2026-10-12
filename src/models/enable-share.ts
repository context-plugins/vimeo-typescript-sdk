import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about enabling the share functionality during playback. */
export type EnableShare = {
  /** Whether an upgrade is required to enable the share functionality during playback. */
  isUpgrade: boolean;
  /** Whether to enable the share functionality during playback. */
  value: boolean;
};

export const enableShareSchema: Schema<EnableShare> = s.object<EnableShare>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
