import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the authenticated user's portraits. */
export type Pictures = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of pictures on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const picturesSchema: Schema<Pictures> = s.object<Pictures>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
