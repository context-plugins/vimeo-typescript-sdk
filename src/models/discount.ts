import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the plan discount. */
export type Discount = {
  /** The annual discount. */
  annual: number;
};

export const discountSchema: Schema<Discount> = s.object<Discount>({
  annual: s.float64(),
});
