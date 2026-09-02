import { s, type EnumSchema } from "../core/index.js";

export const DiscountType = {
  Dollars: "dollars",
  Free: "free",
  Percent: "percent",
} as const;
export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType] | (string & {});

export const discountTypeSchema: EnumSchema<DiscountType> = s.enumOf<DiscountType>(DiscountType);
