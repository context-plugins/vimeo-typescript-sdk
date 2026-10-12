import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to edit a showcase. */
export type Edit2 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const edit2Schema: Schema<Edit2> = s.object<Edit2>({
  options: s.array(s.string()),
  uri: s.string(),
});
