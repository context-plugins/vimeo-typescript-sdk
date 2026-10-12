import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the showcase owner's avatar. */
export type ShowShowcaseOwnerAvatar = {
  /** Whether an upgrade is required to show the showcase owner's avatar. */
  isUpgrade: boolean;
  /** Whether to show the showcase owner's avatar. */
  value: boolean;
};

export const showShowcaseOwnerAvatarSchema: Schema<ShowShowcaseOwnerAvatar> =
  s.object<ShowShowcaseOwnerAvatar>({
    isUpgrade: s.boolean(),
    value: s.boolean(),
    _keysMap: {
      isUpgrade: "is_upgrade",
    },
  });
