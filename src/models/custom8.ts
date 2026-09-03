import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Custom8 = {
  active?: boolean;
  id?: number | null;
  link?: string | null;
  sticky?: boolean;
};

export const custom8Schema: Schema<Custom8> = s.object<Custom8>({
  active: s.optional(s.boolean()),
  id: s.optionalNullable(s.number()),
  link: s.optionalNullable(s.string()),
  sticky: s.optional(s.boolean()),
});
