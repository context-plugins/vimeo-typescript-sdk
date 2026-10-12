import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos that belong to this channel. */
export type Clip = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const clipSchema: Schema<Clip> = s.object<Clip>({
  options: s.array(s.string()),
  uri: s.string(),
});
