import { s, type Schema } from "../core/index.js";

export type ShowPlaybackGridProfileName = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackGridProfileNameSchema: Schema<ShowPlaybackGridProfileName> =
  s.object<ShowPlaybackGridProfileName>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
