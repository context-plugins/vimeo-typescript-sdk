import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata for the parent text track. */
export type ParentTextTrack = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const parentTextTrackSchema: Schema<ParentTextTrack> = s.object<ParentTextTrack>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
