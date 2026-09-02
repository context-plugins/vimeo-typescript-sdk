import { s, type Schema } from "../core/index.js";

export type TeamPermissions1 = {
  options: string[];
};

export const teamPermissions1Schema: Schema<TeamPermissions1> = s.object<TeamPermissions1>({
  options: s.array(s.string()),
});
