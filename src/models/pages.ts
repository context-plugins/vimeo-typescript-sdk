import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the On Demand pages related to this group. */
export type Pages = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const pagesSchema: Schema<Pages> = s.object<Pages>({
  options: s.array(s.string()),
  uri: s.string(),
});
