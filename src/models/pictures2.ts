import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the pictures associated with the On Demand page. */
export type Pictures2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of pictures on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const pictures2Schema: Schema<Pictures2> = s.object<Pictures2>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
