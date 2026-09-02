import { s, type Schema } from "../core/index.js";

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
