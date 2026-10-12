import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the team user who created the folder. This data requires a bearer token with
 * the `private` scope.
 */
export type ResourceCreatorTeamUser1 = {
  /**
   * The URI for the team user who created the folder. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const resourceCreatorTeamUser1Schema: Schema<ResourceCreatorTeamUser1> =
  s.object<ResourceCreatorTeamUser1>({
    uri: s.string(),
  });
