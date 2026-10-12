import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the authenticated user's videos that can be added to or removed from this
 * showcase. This data requires a bearer token with the `private` scope.
 */
export type AvailableVideos = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options: string[];
  /**
   * The total number of videos on this connection. This data requires a bearer token with the
   * `private` scope.
   */
  total: number;
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const availableVideosSchema: Schema<AvailableVideos> = s.object<AvailableVideos>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
