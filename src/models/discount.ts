import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Discount = {
  annual: number;
};

export const discountSchema: Schema<Discount> = s.object<Discount>({
  annual: s.number(),
});
