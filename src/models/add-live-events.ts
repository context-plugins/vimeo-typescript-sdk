import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An action indicating that the authenticated user is an administrator of the showcase and may
 * therefore add events. This data requires a bearer token with the `private` scope.
 */
export type AddLiveEvents = {
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

export const addLiveEventsSchema: Schema<AddLiveEvents> = s.object<AddLiveEvents>({
  options: s.array(s.string()),
  uri: s.string(),
});
