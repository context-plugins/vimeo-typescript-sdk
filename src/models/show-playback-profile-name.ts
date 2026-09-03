import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowPlaybackProfileName = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackProfileNameSchema: Schema<ShowPlaybackProfileName> =
  s.object<ShowPlaybackProfileName>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
