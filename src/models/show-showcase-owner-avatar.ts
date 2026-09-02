import { s, type Schema } from "../core/index.js";

export type ShowShowcaseOwnerAvatar = {
  isUpgrade: boolean;
  value: boolean;
};

export const showShowcaseOwnerAvatarSchema: Schema<ShowShowcaseOwnerAvatar> =
  s.object<ShowShowcaseOwnerAvatar>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
