import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about showing the account name on the showcase page. */
export type ShowAccountName = {
  /** Whether an upgrade is required to show the account name on the showcase page. */
  isUpgrade: boolean;
  /** Whether to show the account name on the showcase page. */
  value: boolean;
};

export const showAccountNameSchema: Schema<ShowAccountName> = s.object<ShowAccountName>({
  isUpgrade: s.boolean(),
  value: s.boolean(),
  _keysMap: {
    isUpgrade: "is_upgrade",
  },
});
