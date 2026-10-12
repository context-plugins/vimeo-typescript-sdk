import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about whether a user can view the team members associated with a video. */
export type ViewTeamMembers = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const viewTeamMembersSchema: Schema<ViewTeamMembers> = s.object<ViewTeamMembers>({
  options: s.array(s.string()),
  uri: s.string(),
});
