import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object containing data on the value of **upgrade_to_role** and whether it's required for the
 * interaction.
 */
export type UpgradeToRole = {
  /** Whether the upgrade role must be sent to achieve the desired action. */
  required: boolean;
  /** The value of the team role to which the user should be upgraded. */
  value: number;
};

export const upgradeToRoleSchema: Schema<UpgradeToRole> = s.object<UpgradeToRole>({
  required: s.boolean(),
  value: s.float64(),
});
