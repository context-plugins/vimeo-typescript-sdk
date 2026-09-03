import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { showSearchBarSchema, type ShowSearchBar } from "./show-search-bar.js";

export type NavigationConfig = {
  showSearchBar: ShowSearchBar;
};

export const navigationConfigSchema: Schema<NavigationConfig> = s.object<NavigationConfig>({
  showSearchBar: showSearchBarSchema,
  _keysMap: {
    showSearchBar: "show_search_bar",
  },
});
