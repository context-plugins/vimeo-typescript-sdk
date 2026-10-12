import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the followed status of the authenticated user. */
export type Follow2 = {
  /** Whether the authenticated user is following the requested user. */
  added?: boolean;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The URI to follow the requested user. */
  uri?: string;
};

export const follow2Schema: Schema<Follow2> = s.object<Follow2>({
  added: s.optional(s.boolean()),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
