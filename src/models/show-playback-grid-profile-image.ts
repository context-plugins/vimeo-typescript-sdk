import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
