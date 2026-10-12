import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the seasons associated with the On Demand page. */
export type Seasons = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of seasons on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const seasonsSchema: Schema<Seasons> = s.object<Seasons>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
