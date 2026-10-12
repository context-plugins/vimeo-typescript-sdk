import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the avatar on the showcase page. */
export type ShowAvatar = {
  /** Whether an upgrade is required to show the avatar on the showcase page. */
  isUpgrade: boolean;
  /** Whether to show the avatar on the showcase page. */
  value: boolean;
};

export const showAvatarSchema: Schema<ShowAvatar> = s.object<ShowAvatar>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
