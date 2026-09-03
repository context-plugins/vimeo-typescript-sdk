import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowBannerHeader = {
  isUpgrade: boolean;
  value: boolean;
};

export const showBannerHeaderSchema: Schema<ShowBannerHeader> = s.object<ShowBannerHeader>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
