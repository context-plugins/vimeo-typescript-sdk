import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Paging = {
  next?: string | null;
  previous?: string | null;
  first?: string | null;
  last?: string | null;
};

export const pagingSchema: Schema<Paging> = s.object<Paging>({
  next: s.optionalNullable(s.string()),
  previous: s.optionalNullable(s.string()),
  first: s.optionalNullable(s.string()),
  last: s.optionalNullable(s.string()),
});
