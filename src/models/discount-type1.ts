import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DiscountType1 = {
  Free: "free",
  Percent: "percent",
} as const;
export type DiscountType1 = (typeof DiscountType1)[keyof typeof DiscountType1] | (string & {});

export const discountType1Schema: EnumSchema<DiscountType1> = s.enumOf<DiscountType1>(DiscountType1);
