import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowBannerDescription = {
  isUpgrade: boolean;
  value: boolean;
};

export const showBannerDescriptionSchema: Schema<ShowBannerDescription> = s.object<ShowBannerDescription>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
