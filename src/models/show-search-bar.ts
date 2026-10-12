import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the search bar in the featured content layout. */
export type ShowSearchBar = {
  /** Whether an upgrade is required to show the search bar in the featured content layout. */
  isUpgrade: boolean;
  /** Whether to show the search bar in the featured content layout. */
  value: boolean;
};

export const showSearchBarSchema: Schema<ShowSearchBar> = s.object<ShowSearchBar>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
