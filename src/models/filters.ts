import { s, type Schema } from "../core/index.js";

export type Filters = {
  parentId?: number;
};

export const filtersSchema: Schema<Filters> = s.object<Filters>({
  parentId: s.optional(s.number()),
  _keysMap: {
    parentId: "parent_id",
  },
});
