import { s, type Schema } from "../core/index.js";

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
