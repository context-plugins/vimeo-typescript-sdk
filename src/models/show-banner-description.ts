import { s, type Schema } from "../core/index.js";

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
