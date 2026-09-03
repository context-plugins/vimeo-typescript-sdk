import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowPlaybackViews = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackViewsSchema: Schema<ShowPlaybackViews> = s.object<ShowPlaybackViews>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
