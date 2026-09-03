import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpgradeToRole = {
  required: boolean;
  value: number;
};

export const upgradeToRoleSchema: Schema<UpgradeToRole> = s.object<UpgradeToRole>({
  required: s.boolean(),
  value: s.number(),
});
