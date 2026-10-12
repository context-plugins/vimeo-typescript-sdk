import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's followers. */
export type Followers = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of followers on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const followersSchema: Schema<Followers> = s.object<Followers>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
