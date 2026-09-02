import { s, type Schema } from "../core/index.js";

export type ShowPlaybackVideoTitle = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackVideoTitleSchema: Schema<ShowPlaybackVideoTitle> = s.object<ShowPlaybackVideoTitle>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
