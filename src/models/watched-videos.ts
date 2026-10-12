import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the videos that the authenticated user has watched. */
export type WatchedVideos = {
  /** An array of HTTP methods permitted on this URI. */
  options?: string[];
  /** The total number of videos on this connection. */
  total?: number;
  /** The API URI that resolves to the connection data. */
  uri?: string;
};

export const watchedVideosSchema: Schema<WatchedVideos> = s.object<WatchedVideos>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.float64()),
  uri: s.optional(s.string()),
});
