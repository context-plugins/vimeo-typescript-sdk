import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disabled1Schema, type Disabled1 } from "./disabled1.js";

/**
 * Information about the showcases that contain the video. This data requires a bearer token with
 * the `private` scope.
 */
export type Albums1 = {
  disabled?: Disabled1;
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

export const albums1Schema: Schema<Albums1> = s.object<Albums1>({
  disabled: s.optional(s.lazy(() => disabled1Schema)),
  options: s.optional(s.array(s.string())),
  total: s.optional(s.float64()),
  uri: s.optional(s.string()),
});
