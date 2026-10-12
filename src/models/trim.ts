import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about where and how to trim the video. */
export type Trim = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const trimSchema: Schema<Trim> = s.object<Trim>({
  options: s.array(s.string()),
  uri: s.string(),
});
