import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing video player cards on the showcase page. */
export type ShowVideoPlayerCards = {
  /** Whether an upgrade is required to show video player cards on the showcase page. */
  isUpgrade: boolean;
  /** Whether to show video player cards on the showcase page. */
  value: boolean;
};

export const showVideoPlayerCardsSchema: Schema<ShowVideoPlayerCards> = s.object<ShowVideoPlayerCards>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
