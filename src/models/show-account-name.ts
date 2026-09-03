import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowAccountName = {
  isUpgrade: boolean;
  value: boolean;
};

export const showAccountNameSchema: Schema<ShowAccountName> = s.object<ShowAccountName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
