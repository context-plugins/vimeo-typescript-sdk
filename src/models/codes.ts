import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the codes associated with the promotion. */
export type Codes = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of uses on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const codesSchema: Schema<Codes> = s.object<Codes>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
