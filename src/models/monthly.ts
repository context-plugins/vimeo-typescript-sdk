import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price6Schema, type Price6 } from "./price6.js";

export type Monthly = {
  active?: boolean;
  price?: Price6;
};

export const monthlySchema: Schema<Monthly> = s.object<Monthly>({
  active: s.optional(s.boolean()),
  price: s.optional(s.lazy(() => price6Schema)),
});
