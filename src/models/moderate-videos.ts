import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An action indicating that the authenticated user is a moderator of the channel and may therefore
 * add or remove videos from the channel. This data requires a bearer token with the `private`
 * scope.
 */
export type ModerateVideos = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options: string[];
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const moderateVideosSchema: Schema<ModerateVideos> = s.object<ModerateVideos>({
  options: s.array(s.string()),
  uri: s.string(),
});
