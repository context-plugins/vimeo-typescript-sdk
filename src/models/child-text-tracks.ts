import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filtersSchema, type Filters } from "./filters.js";

/**
 * Metadata for the child text tracks. This data requires a bearer token with the `private` scope.
 */
export type ChildTextTracks = {
  /**
   * The request filters to use for child text tracks. This data requires a bearer token with the
   * `private` scope.
   */
  filters?: Filters;
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

export const childTextTracksSchema: Schema<ChildTextTracks> = s.object<ChildTextTracks>({
  filters: s.optional(s.lazy(() => filtersSchema)),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
