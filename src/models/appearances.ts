import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the appearances of the authenticated user in other videos. */
export type Appearances = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of appearances on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const appearancesSchema: Schema<Appearances> = s.object<Appearances>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
