import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the profile name on each video. */
export type ShowGridProfileName = {
  /** Whether an upgrade is required to show the profile name on each video. */
  isUpgrade: boolean;
  /** Whether to show the profile name on each video. */
  value: boolean;
};

export const showGridProfileNameSchema: Schema<ShowGridProfileName> = s.object<ShowGridProfileName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
