import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of discount that the promotion provides.
 *
 * Option descriptions:
 *  * `dollars` - The promotion discounts a fixed amount from the full purchase price.
 *  * `free` - The promotion discounts the full purchase price. When **access_type** is `vip`,
 *    **discount_type** is always `free`.
 *  * `percent` - The promotion discounts a percentage of the full purchase price.
 */
export const DiscountType = {
  Dollars: "dollars",
  Free: "free",
  Percent: "percent",
} as const;
export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType] | (string & {});

export const discountTypeSchema: EnumSchema<DiscountType> = s.enumOf<DiscountType>(DiscountType);
