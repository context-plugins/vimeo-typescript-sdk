import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the banner on the showcase page. */
export type ShowBanner = {
  /** Whether an upgrade is required to show the banner on the showcase page. */
  isUpgrade: boolean;
  /** Whether to show the banner on the showcase page. */
  value: boolean;
};

export const showBannerSchema: Schema<ShowBanner> = s.object<ShowBanner>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
