import { s, type Schema } from "../core/index.js";

export type TeamMember = {
  options: string[];
  uri: string;
};

export const teamMemberSchema: Schema<TeamMember> = s.object<TeamMember>({
  options: s.array(s.string()),
  uri: s.string(),
});
