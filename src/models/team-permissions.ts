import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the video's team permissions list. This data requires a bearer token with the
 * `private` scope.
 */
export type TeamPermissions = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options?: string[];
};

export const teamPermissionsSchema: Schema<TeamPermissions> = s.object<TeamPermissions>({
  options: s.optional(s.array(s.string())),
});
