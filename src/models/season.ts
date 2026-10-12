import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the video's season. */
export type Season = {
  /** The name of the season. */
  name?: string;
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const seasonSchema: Schema<Season> = s.object<Season>({
  name: s.optional(s.string()),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
