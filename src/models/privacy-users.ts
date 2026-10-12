import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information provided to channel moderators about which users they have specifically permitted to
 * access this private channel. This data requires a bearer token with the `private` scope.
 */
export type PrivacyUsers = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options: string[];
  /**
   * The total number of users on this connection. This data requires a bearer token with the
   * `private` scope.
   */
  total: number;
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri: string;
};

export const privacyUsersSchema: Schema<PrivacyUsers> = s.object<PrivacyUsers>({
  options: s.array(s.string()),
  total: s.float64(),
  uri: s.string(),
});
