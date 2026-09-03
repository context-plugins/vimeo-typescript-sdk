import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
