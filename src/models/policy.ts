import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the folder's data retention policy. This data requires a bearer token with the
 * `private` scope.
 */
export type Policy = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options: string[];
  /**
   * The title of the data retention policy. This data requires a bearer token with the `private`
   * scope.
   */
  title: string;
  /**
   * The URI of the data retention policy. This data requires a bearer token with the `private`
   * scope.
   */
  uri: string;
};

export const policySchema: Schema<Policy> = s.object<Policy>({
  options: s.array(s.string()),
  title: s.string(),
  uri: s.string(),
});
