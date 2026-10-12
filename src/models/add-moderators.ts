import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An action indicating that the authenticated user is the owner of the channel and may therefore
 * add other users as channel moderators. This data requires a bearer token with the `private`
 * scope.
 */
export type AddModerators = {
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

export const addModeratorsSchema: Schema<AddModerators> = s.object<AddModerators>({
  options: s.array(s.string()),
  uri: s.string(),
});
