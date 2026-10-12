import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about adding or removing a video from the showcase. This information is included only
 * when the video is referenced by the URI of a showcase that's moderated by the user.
 */
export type Album4 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const album4Schema: Schema<Album4> = s.object<Album4>({
  options: s.array(s.string()),
  uri: s.string(),
});
