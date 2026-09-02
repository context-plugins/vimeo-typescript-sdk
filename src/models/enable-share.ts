import { s, type Schema } from "../core/index.js";

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
