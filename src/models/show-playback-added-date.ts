import { s, type Schema } from "../core/index.js";

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
