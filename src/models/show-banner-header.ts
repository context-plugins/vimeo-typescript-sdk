import { s, type Schema } from "../core/index.js";

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
