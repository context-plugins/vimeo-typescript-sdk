import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the replies to the comment. */
export type Replies = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of replies on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const repliesSchema: Schema<Replies> = s.object<Replies>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
