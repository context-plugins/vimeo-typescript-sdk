import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowGridVideoTitles = {
  isUpgrade: boolean;
  value: boolean;
};

export const showGridVideoTitlesSchema: Schema<ShowGridVideoTitles> = s.object<ShowGridVideoTitles>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
