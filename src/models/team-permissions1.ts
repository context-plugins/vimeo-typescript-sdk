import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the folder's team permissions list. This data requires a bearer token with the
 * `private` scope.
 */
export type TeamPermissions1 = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options: string[];
};

export const teamPermissions1Schema: Schema<TeamPermissions1> = s.object<TeamPermissions1>({
  options: s.array(s.string()),
});
