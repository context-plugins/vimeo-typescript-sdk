import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about enabling the comments functionality during playback. */
export type EnableComments = {
  /** Whether an upgrade is required to enable the comments functionality during playback. */
  isUpgrade: boolean;
  /** Whether to enable the comments functionality during playback. */
  value: boolean;
};

export const enableCommentsSchema: Schema<EnableComments> = s.object<EnableComments>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
