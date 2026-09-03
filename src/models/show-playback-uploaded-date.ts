import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
