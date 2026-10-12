import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the showcase header. */
export type ShowBannerHeader = {
  /** Whether an upgrade is required to show the showcase header. */
  isUpgrade: boolean;
  /** Whether to show the showcase header. */
  value: boolean;
};

export const showBannerHeaderSchema: Schema<ShowBannerHeader> = s.object<ShowBannerHeader>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
