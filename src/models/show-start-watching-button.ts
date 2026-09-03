import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowStartWatchingButton = {
  isUpgrade: boolean;
  value: boolean;
};

export const showStartWatchingButtonSchema: Schema<ShowStartWatchingButton> =
  s.object<ShowStartWatchingButton>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
