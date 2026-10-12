import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's related content. */
export type Related = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const relatedSchema: Schema<Related> = s.object<Related>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
