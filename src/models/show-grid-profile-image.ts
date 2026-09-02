import { s, type Schema } from "../core/index.js";

export type ShowGridProfileImage = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridProfileImageSchema: Schema<ShowGridProfileImage> = s.object<ShowGridProfileImage>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
