import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the team member who owns the event. */
export type TeamMember = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const teamMemberSchema: Schema<TeamMember> = s.object<TeamMember>({
  options: s.array(s.string()),
  uri: s.string(),
});
