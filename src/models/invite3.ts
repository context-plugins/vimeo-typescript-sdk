import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to invite a team member to a showcase. */
export type Invite3 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const invite3Schema: Schema<Invite3> = s.object<Invite3>({
  options: s.array(s.string()),
  uri: s.string(),
});
