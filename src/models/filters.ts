import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Filters = {
  parentId?: number;
};

export const filtersSchema: Schema<Filters> = s.object<Filters>({
  parentId: s.optional(s.number()),
  _keysMap: {
    parentId: "parent_id",
  },
});
