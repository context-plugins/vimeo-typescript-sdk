import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddPrivacyUser = {
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options?: string[];
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri?: string;
};

export const addPrivacyUserSchema: Schema<AddPrivacyUser> = s.object<AddPrivacyUser>({
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
