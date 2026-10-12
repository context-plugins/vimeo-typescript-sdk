import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's thumbnails. */
export type Pictures1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** Total number of thumbnails on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const pictures1Schema: Schema<Pictures1> = s.object<Pictures1>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
