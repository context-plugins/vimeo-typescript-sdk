import { s, type Schema } from "../core/index.js";

export type ShowAvatar = {
  isUpgrade: boolean;
  value: boolean;
};

export const showAvatarSchema: Schema<ShowAvatar> = s.object<ShowAvatar>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
