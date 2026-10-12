import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos that belong to the event. */
export type Videos10 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of videos on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const videos10Schema: Schema<Videos10> = s.object<Videos10>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
