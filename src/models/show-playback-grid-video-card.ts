import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
