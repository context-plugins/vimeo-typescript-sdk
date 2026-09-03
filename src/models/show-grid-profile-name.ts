import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowGridProfileName = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridProfileNameSchema: Schema<ShowGridProfileName> = s.object<ShowGridProfileName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
