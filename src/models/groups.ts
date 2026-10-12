import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the groups related to this category. */
export type Groups = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of groups on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const groupsSchema: Schema<Groups> = s.object<Groups>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
