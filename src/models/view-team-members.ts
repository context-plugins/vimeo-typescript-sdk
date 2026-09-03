import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ViewTeamMembers = {
  options: string[];
  uri: string;
};

export const viewTeamMembersSchema: Schema<ViewTeamMembers> = s.object<ViewTeamMembers>({
  options: s.array(s.string()),
  uri: s.string(),
});
