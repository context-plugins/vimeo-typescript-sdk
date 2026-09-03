import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EnableShare = {
  isUpgrade: boolean;
  value: boolean;
};

export const enableShareSchema: Schema<EnableShare> = s.object<EnableShare>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
