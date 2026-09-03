import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
