import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the button to start watching. */
export type ShowStartWatchingButton = {
  /** Whether an upgrade is required for showing the button to start watching. */
  isUpgrade: boolean;
  /** Whether to show the button to start watching. */
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
