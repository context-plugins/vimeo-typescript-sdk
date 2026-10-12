import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the comments on the video. */
export type Comments1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of comments on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const comments1Schema: Schema<Comments1> = s.object<Comments1>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
