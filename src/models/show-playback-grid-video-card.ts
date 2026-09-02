import { s, type Schema } from "../core/index.js";

export type ShowPlaybackGridVideoCard = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackGridVideoCardSchema: Schema<ShowPlaybackGridVideoCard> =
  s.object<ShowPlaybackGridVideoCard>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
