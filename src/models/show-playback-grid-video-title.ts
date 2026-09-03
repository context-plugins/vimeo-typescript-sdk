import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
