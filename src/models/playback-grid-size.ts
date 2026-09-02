import { s, type Schema } from "../core/index.js";

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
