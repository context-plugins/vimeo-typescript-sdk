import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the team user who uploaded the video. This data requires a bearer token with
 * the `private` scope.
 */
export type ResourceCreatorTeamUser = {
  /**
   * The URI for the team user who uploaded the video. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const resourceCreatorTeamUserSchema: Schema<ResourceCreatorTeamUser> =
  s.object<ResourceCreatorTeamUser>({
    uri: s.string(),
  });
