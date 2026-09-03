import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SharedTeam = {
  link?: string;
  logoUrl?: string | null;
  name?: string;
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
