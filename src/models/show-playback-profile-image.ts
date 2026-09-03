import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
