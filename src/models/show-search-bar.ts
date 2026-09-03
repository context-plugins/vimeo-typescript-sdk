import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowSearchBar = {
  isUpgrade: boolean;
  value: boolean;
};

export const showSearchBarSchema: Schema<ShowSearchBar> = s.object<ShowSearchBar>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
