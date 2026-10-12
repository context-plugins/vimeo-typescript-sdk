import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of discount offered by the promotion code. When **access_type** is `vip`, the value of
 * this parameter must be `free`.
 *
 * Option descriptions:
 *  * `free` - The discount reduces the price to zero.
 *  * `percent` - The discount reduces the price by the percentage defined in the **percent_off**
 *    parameter.
 */
export const DiscountType1 = {
  Free: "free",
  Percent: "percent",
} as const;
export type DiscountType1 = (typeof DiscountType1)[keyof typeof DiscountType1] | (string & {});

export const discountType1Schema: EnumSchema<DiscountType1> = s.enumOf<DiscountType1>(DiscountType1);
