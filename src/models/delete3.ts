import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to delete an item. */
export type Delete3 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const delete3Schema: Schema<Delete3> = s.object<Delete3>({
  options: s.array(s.string()),
  uri: s.string(),
});
