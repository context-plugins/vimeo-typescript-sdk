import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowPlaybackVideoDescription = {
  isUpgrade: boolean;
  value: boolean;
};

export const showPlaybackVideoDescriptionSchema: Schema<ShowPlaybackVideoDescription> =
  s.object<ShowPlaybackVideoDescription>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
