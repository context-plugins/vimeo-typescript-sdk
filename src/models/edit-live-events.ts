import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An action indicating that the authenticated user can edit event videos inside the showcase. This
 * data requires a bearer token with the `private` scope.
 */
export type EditLiveEvents = {
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

export const editLiveEventsSchema: Schema<EditLiveEvents> = s.object<EditLiveEvents>({
  options: s.array(s.string()),
  uri: s.string(),
});
