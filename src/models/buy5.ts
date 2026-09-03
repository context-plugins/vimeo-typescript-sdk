import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price7Schema, type Price7 } from "./price7.js";

export type Buy5 = {
  price?: Price7;
};

export const buy5Schema: Schema<Buy5> = s.object<Buy5>({
  price: s.optional(s.lazy(() => price7Schema)),
});
