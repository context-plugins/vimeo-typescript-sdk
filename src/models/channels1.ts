import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the channels to which the authenticated user subscribes. */
export type Channels1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of channels on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const channels1Schema: Schema<Channels1> = s.object<Channels1>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
