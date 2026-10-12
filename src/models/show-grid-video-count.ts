import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the video count above the video list. */
export type ShowGridVideoCount = {
  /** Whether an upgrade is required to show the video count above the video list. */
  isUpgrade: boolean;
  /** Whether to show the video count above the video list. */
  value: boolean;
};

export const showGridVideoCountSchema: Schema<ShowGridVideoCount> = s.object<ShowGridVideoCount>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
