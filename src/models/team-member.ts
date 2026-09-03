import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamMember = {
  options: string[];
  uri: string;
};

export const teamMemberSchema: Schema<TeamMember> = s.object<TeamMember>({
  options: s.array(s.string()),
  uri: s.string(),
});
