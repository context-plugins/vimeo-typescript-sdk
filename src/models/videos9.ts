import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos that belong to the showcase. */
export type Videos9 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of videos on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const videos9Schema: Schema<Videos9> = s.object<Videos9>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
