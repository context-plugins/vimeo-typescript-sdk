import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the description on the showcase page. */
export type ShowVideoDescription = {
  /** Whether an upgrade is required to show the description on the showcase page. */
  isUpgrade: boolean;
  /** Whether to show the description on the showcase page. */
  value: boolean;
};

export const showVideoDescriptionSchema: Schema<ShowVideoDescription> = s.object<ShowVideoDescription>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
