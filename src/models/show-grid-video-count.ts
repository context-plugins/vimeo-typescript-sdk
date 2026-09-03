import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowGridVideoCount = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridVideoCountSchema: Schema<ShowGridVideoCount> = s.object<ShowGridVideoCount>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
