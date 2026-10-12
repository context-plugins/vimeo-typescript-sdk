import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's text tracks. */
export type Texttracks = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The total number of text tracks on this connection. */
  total: number;
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const texttracksSchema: Schema<Texttracks> = s.object<Texttracks>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
