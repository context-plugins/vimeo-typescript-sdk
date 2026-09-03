import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowPlaybackVideoCount = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackVideoCountSchema: Schema<ShowPlaybackVideoCount> = s.object<ShowPlaybackVideoCount>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
