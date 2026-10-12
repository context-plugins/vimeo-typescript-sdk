import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the groups created by the authenticated user. */
export type Groups1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of groups on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const groups1Schema: Schema<Groups1> = s.object<Groups1>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
