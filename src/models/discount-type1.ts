import { s, type EnumSchema } from "../core/index.js";

export const DiscountType1 = {
  Free: "free",
  Percent: "percent",
} as const;
export type DiscountType1 = (typeof DiscountType1)[keyof typeof DiscountType1] | (string & {});

export const discountType1Schema: EnumSchema<DiscountType1> = s.enumOf<DiscountType1>(DiscountType1);
