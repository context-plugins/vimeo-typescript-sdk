import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the showcase description. */
export type ShowBannerDescription = {
  /** Whether an upgrade is required to show the showcase description. */
  isUpgrade: boolean;
  /** Whether to show the showcase description. */
  value: boolean;
};

export const showBannerDescriptionSchema: Schema<ShowBannerDescription> = s.object<ShowBannerDescription>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
