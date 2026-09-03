import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaybackGridSize = {
  isUpgrade: boolean;
  value: string;
};

export const playbackGridSizeSchema: Schema<PlaybackGridSize> = s.object<PlaybackGridSize>({
  isUpgrade: s.boolean(),
  value: s.string(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
