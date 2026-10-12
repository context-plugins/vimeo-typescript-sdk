import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transaction to which the promotion applies. When **access_type** is `default`, the
 * default value is `any`. When **access_type** is `vip`, the default value is `rent` and the only
 * valid product types are `buy` and `rent`.
 *
 * Option descriptions:
 *  * `any` - The promotion applies to any transaction.
 *  * `buy` - The promotion applies only to purchased products.
 *  * `buy_episode` - The promotion applies only to purchased episodes.
 *  * `rent` - The promotion applies only to rented products.
 *  * `rent_episode` - The promotion applies only to rented episodes.
 *  * `subscribe` - The promotion applies only to subscriptions.
 */
export const ProductType1 = {
  Any: "any",
  Buy: "buy",
  BuyEpisode: "buy_episode",
  Rent: "rent",
  RentEpisode: "rent_episode",
  Subscribe: "subscribe",
} as const;
export type ProductType1 = (typeof ProductType1)[keyof typeof ProductType1] | (string & {});

export const productType1Schema: EnumSchema<ProductType1> = s.enumOf<ProductType1>(ProductType1);
