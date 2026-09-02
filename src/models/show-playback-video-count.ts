import { s, type Schema } from "../core/index.js";

export type ShowPlaybackVideoCount = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackVideoCountSchema: Schema<ShowPlaybackVideoCount> = s.object<ShowPlaybackVideoCount>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
