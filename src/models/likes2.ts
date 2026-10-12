import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the likes associated with the On Demand page. */
export type Likes2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of likes on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const likes2Schema: Schema<Likes2> = s.object<Likes2>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
