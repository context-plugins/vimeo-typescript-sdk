import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the users who are followed by the authenticated user. */
export type Following = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of users on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const followingSchema: Schema<Following> = s.object<Following>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
