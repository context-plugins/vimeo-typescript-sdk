import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos that the authenticated user has liked. */
export type Likes = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of likes on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const likesSchema: Schema<Likes> = s.object<Likes>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
