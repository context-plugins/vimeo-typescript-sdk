import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The request filters to use for child text tracks. This data requires a bearer token with the
 * `private` scope.
 */
export type Filters = {
  /**
   * A filter that represents the ID of the parent text track. This data requires a bearer token
   * with the `private` scope.
   */
  parentId?: number;
};

export const filtersSchema: Schema<Filters> = s.object<Filters>({
  parentId: s.optional(s.float64()),
  _keysMap: {
    parentId: "parent_id",
  },
});
