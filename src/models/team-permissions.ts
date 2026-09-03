import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamPermissions = {
  options?: string[];
};

export const teamPermissionsSchema: Schema<TeamPermissions> = s.object<TeamPermissions>({
  options: s.optional(s.array(s.string())),
});
