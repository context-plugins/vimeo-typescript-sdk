import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disabled2Schema, type Disabled2 } from "./disabled2.js";

/**
 * Information about the available showcases, or the showcases to which the video can be added. This
 * data requires a bearer token with the `private` scope.
 */
export type AvailableAlbums = {
  disabled?: Disabled2;
  /**
   * An array of HTTP methods permitted on this URI. This data requires a bearer token with the
   * `private` scope.
   */
  options?: string[];
  /**
   * The total number of showcases on this connection. This data requires a bearer token with the
   * `private` scope.
   */
  total?: number;
  /**
   * The API URI that resolves to the connection data. This data requires a bearer token with the
   * `private` scope.
   */
  uri?: string;
};

export const availableAlbumsSchema: Schema<AvailableAlbums> = s.object<AvailableAlbums>({
  disabled: s.optional(s.lazy(() => disabled2Schema)),
  options: s.optional(s.array(s.string())),
  total: s.optional(s.float64()),
  uri: s.optional(s.string()),
});
