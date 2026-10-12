import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of product to which the promotion can be applied. Only the `buy` and `rent` options are
 * available when **access_type** is `vip`.
 *
 * Option descriptions:
 *  * `any` - The promotion can be applied to any product.
 *  * `buy` - The promotion can be applied to a buyable single video.
 *  * `buy_episode` - The promotion can be applied to a buyable single episode.
 *  * `rent` - The promotion can be applied to a rentable single video.
 *  * `rent_episode` - The promotion can be applied to a rentable single episode.
 *  * `subscribe` - The promotion can be applied to a subscription.
 */
export const ProductType = {
  Any: "any",
  Buy: "buy",
  BuyEpisode: "buy_episode",
  Rent: "rent",
  RentEpisode: "rent_episode",
  Subscribe: "subscribe",
} as const;
export type ProductType = (typeof ProductType)[keyof typeof ProductType] | (string & {});

export const productTypeSchema: EnumSchema<ProductType> = s.enumOf<ProductType>(ProductType);
