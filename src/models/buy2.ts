import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Buy2 = {
  active: boolean;
  price: Record<string, unknown>;
  purchased?: boolean;
};

export const buy2Schema: Schema<Buy2> = s.object<Buy2>({
  active: s.boolean(),
  price: s.record(s.string(), s.unknown()),
  purchased: s.optional(s.boolean()),
});
