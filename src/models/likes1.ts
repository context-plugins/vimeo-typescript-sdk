import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the users who have liked the video. */
export type Likes1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of likes on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const likes1Schema: Schema<Likes1> = s.object<Likes1>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
