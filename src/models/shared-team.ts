import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the team of the shared item. */
export type SharedTeam = {
  /** The absolute URL of the authenticated users's profile page. */
  link?: string;
  /** The team logo URL. */
  logoUrl?: string | null;
  /** The display name of the team of the shared item. */
  name?: string;
  /** The unique identifier to access the team owner user resource. */
  uri?: string;
};

export const sharedTeamSchema: Schema<SharedTeam> = s.object<SharedTeam>({
  link: s.optional(s.string()),
  logoUrl: s.optionalNullable(s.string()),
  name: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    logoUrl: "logo_url",
  },
});
