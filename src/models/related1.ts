import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The activity's related content. */
export type Related1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const related1Schema: Schema<Related1> = s.object<Related1>({
  options: s.array(s.string()),
  uri: s.string(),
});
