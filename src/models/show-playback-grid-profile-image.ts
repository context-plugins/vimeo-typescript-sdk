import { s, type Schema } from "../core/index.js";

export type ShowPlaybackGridProfileImage = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackGridProfileImageSchema: Schema<ShowPlaybackGridProfileImage> =
  s.object<ShowPlaybackGridProfileImage>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
