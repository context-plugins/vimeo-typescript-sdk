import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about removing a video from the channel. This information is included only when the
 * video is referenced by the URI of a channel that's moderated by the user.
 */
export type Channel1 = {
  /** An array of HTTP methods permitted on this URI. */
  options: string[];
  /** The API URI that resolves to the connection data. */
  uri: string;
};

export const channel1Schema: Schema<Channel1> = s.object<Channel1>({
  options: s.array(s.string()),
  uri: s.string(),
});
