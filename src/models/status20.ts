import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The purchase status of the product.
 *
 * Option descriptions:
 *  * `available` - The product is available for purchase.
 *  * `purchased` - The product is already purchased.
 *  * `unavailable` - The product isn't available for purchase.
 */
export const Status20 = {
  Available: "available",
  Purchased: "purchased",
  Unavailable: "unavailable",
} as const;
export type Status20 = (typeof Status20)[keyof typeof Status20] | (string & {});

export const status20Schema: EnumSchema<Status20> = s.enumOf<Status20>(Status20);
