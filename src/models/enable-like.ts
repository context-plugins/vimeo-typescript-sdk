import { s, type Schema } from "../core/index.js";

export type EnableLike = {
  isUpgrade: boolean;
  value: boolean;
};

export const enableLikeSchema: Schema<EnableLike> = s.object<EnableLike>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
