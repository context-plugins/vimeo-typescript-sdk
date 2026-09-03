import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
