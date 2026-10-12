import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the categories that the authenticated user is following. */
export type Categories = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of categories on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const categoriesSchema: Schema<Categories> = s.object<Categories>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
