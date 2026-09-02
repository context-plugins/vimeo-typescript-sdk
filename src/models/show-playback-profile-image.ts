import { s, type Schema } from "../core/index.js";

export type ShowPlaybackProfileImage = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackProfileImageSchema: Schema<ShowPlaybackProfileImage> =
  s.object<ShowPlaybackProfileImage>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
