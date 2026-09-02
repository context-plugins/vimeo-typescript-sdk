import { s, type Schema } from "../core/index.js";

export type ShowPlaybackUploadedDate = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackUploadedDateSchema: Schema<ShowPlaybackUploadedDate> =
  s.object<ShowPlaybackUploadedDate>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
