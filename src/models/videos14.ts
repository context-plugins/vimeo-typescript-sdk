import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos in the preset. */
export type Videos14 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of videos on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const videos14Schema: Schema<Videos14> = s.object<Videos14>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
