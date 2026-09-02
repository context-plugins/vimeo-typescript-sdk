import { s, type Schema } from "../core/index.js";

export type ViewTeamMembers = {
  options: string[];
  uri: string;
};

export const viewTeamMembersSchema: Schema<ViewTeamMembers> = s.object<ViewTeamMembers>({
  options: s.array(s.string()),
  uri: s.string(),
});
