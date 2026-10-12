import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the team owner. */
export type Owner1 = {
  /** The display name of the team owner. */
  displayName: string;
  /** The team owner's email address. */
  email: string;
  /** The total number of remaining team member invites. */
  invitesRemaining: number;
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of owners on this connection. */
  total: number;
  /** The total number of team members for the specified team owner. */
  totalMembers: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const owner1Schema: Schema<Owner1> = s.object<Owner1>({
  displayName: s.string(),
  email: s.string(),
  invitesRemaining: s.float64(),
  options: s.array(s.string()),
  total: s.float64(),
  totalMembers: s.float64(),
  uri: s.string(),
  _keysMap: {
    displayName: "display_name",
    invitesRemaining: "invites_remaining",
    totalMembers: "total_members",
  },
});
