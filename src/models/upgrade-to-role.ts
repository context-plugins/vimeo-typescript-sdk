import { s, type Schema } from "../core/index.js";

export type UpgradeToRole = {
  required: boolean;
  value: number;
};

export const upgradeToRoleSchema: Schema<UpgradeToRole> = s.object<UpgradeToRole>({
  required: s.boolean(),
  value: s.number(),
});
