import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the showcase title. */
export type ShowBannerTitle = {
  /** Whether an upgrade is required to show the showcase title. */
  isUpgrade: boolean;
  /** Whether to show the showcase title. */
  value: boolean;
};

export const showBannerTitleSchema: Schema<ShowBannerTitle> = s.object<ShowBannerTitle>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
