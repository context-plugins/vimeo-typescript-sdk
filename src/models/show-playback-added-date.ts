import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowPlaybackAddedDate = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackAddedDateSchema: Schema<ShowPlaybackAddedDate> = s.object<ShowPlaybackAddedDate>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
