import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price3Schema, type Price3 } from "./price3.js";

export type Buy4 = {
  active?: boolean;
  download?: boolean;
  price?: Price3;
};

export const buy4Schema: Schema<Buy4> = s.object<Buy4>({
  active: s.optional(s.boolean()),
  download: s.optional(s.boolean()),
  price: s.optional(s.lazy(() => price3Schema)),
});
