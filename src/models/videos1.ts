import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos that belong to this channel. */
export type Videos1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of videos on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const videos1Schema: Schema<Videos1> = s.object<Videos1>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
