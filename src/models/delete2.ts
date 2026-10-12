import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to delete a showcase. */
export type Delete2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const delete2Schema: Schema<Delete2> = s.object<Delete2>({
  options: s.array(s.string()),
  uri: s.string(),
});
