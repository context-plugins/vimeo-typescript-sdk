import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowBanner = {
  isUpgrade: boolean;
  value: boolean;
};

export const showBannerSchema: Schema<ShowBanner> = s.object<ShowBanner>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
