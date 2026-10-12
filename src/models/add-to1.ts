import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about adding or removing a video from the showcase. This data requires a bearer token
 * with the `private` scope.
 */
export type AddTo1 = {
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

export const addTo1Schema: Schema<AddTo1> = s.object<AddTo1>({
  options: s.array(s.string()),
  uri: s.string(),
});
