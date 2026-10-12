import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A collection of recommended users for the authenticated user to follow. This data requires a
 * bearer token with the `private` scope. This data requires a bearer token with the `private`
 * scope.
 */
export type RecommendedUsers = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options?: string[];
  /**
   * The total number of users on this connection. This data requires a bearer token with the
   * `private` scope.
   */
  total?: number;
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri?: string;
};

export const recommendedUsersSchema: Schema<RecommendedUsers> = s.object<RecommendedUsers>({
  options: s.optional(s.array(s.string())),
  total: s.optional(s.float64()),
  uri: s.optional(s.string()),
});
