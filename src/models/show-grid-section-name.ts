import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowGridSectionName = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridSectionNameSchema: Schema<ShowGridSectionName> = s.object<ShowGridSectionName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
