import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Buy1 = {
  active: boolean;
  price: number | null;
};

export const buy1Schema: Schema<Buy1> = s.object<Buy1>({
  active: s.boolean(),
  price: s.nullable(s.number()),
});
