import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing video details on the showcase page. */
export type ShowVideoDetails = {
  /** Whether an upgrade is required to show video details on the showcase page. */
  isUpgrade: boolean;
  /** Whether to show video details on the showcase page. */
  value: boolean;
};

export const showVideoDetailsSchema: Schema<ShowVideoDetails> = s.object<ShowVideoDetails>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
