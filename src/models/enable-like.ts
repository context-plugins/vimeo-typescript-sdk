import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
