import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video version that is created from the trim operation. */
export type CreatedVersion = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const createdVersionSchema: Schema<CreatedVersion> = s.object<CreatedVersion>({
  options: s.array(s.string()),
  uri: s.string(),
});
