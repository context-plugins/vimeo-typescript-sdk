import { s, type Schema } from "../core/index.js";

export type TeamPermissions = {
  options?: string[];
};

export const teamPermissionsSchema: Schema<TeamPermissions> = s.object<TeamPermissions>({
  options: s.optional(s.array(s.string())),
});
