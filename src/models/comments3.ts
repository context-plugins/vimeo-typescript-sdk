import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the comments associated with the On Demand page. */
export type Comments3 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of comments on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const comments3Schema: Schema<Comments3> = s.object<Comments3>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
