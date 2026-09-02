import { s, type Schema } from "../core/index.js";

export type ShowPlaybackGridVideoTitle = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackGridVideoTitleSchema: Schema<ShowPlaybackGridVideoTitle> =
  s.object<ShowPlaybackGridVideoTitle>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
