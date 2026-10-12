import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A standard connection object indicating how to return groups that this team user is a part of.
 */
export type Groups2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const groups2Schema: Schema<Groups2> = s.object<Groups2>({
  options: s.array(s.string()),
  uri: s.string(),
});
