import { s, type Schema } from "../core/index.js";

export type ShowBannerTitle = {
  isUpgrade: boolean;
  value: boolean;
};

export const showBannerTitleSchema: Schema<ShowBannerTitle> = s.object<ShowBannerTitle>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
