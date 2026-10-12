import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The brand of the card.
 *
 * Option descriptions:
 *  * `CARD_BRAND_AMERICAN_EXPRESS` - The card brand is American Express.
 *  * `CARD_BRAND_DISCOVER` - The card brand is Discover.
 *  * `CARD_BRAND_JCB` - The card brand is JCB.
 *  * `CARD_BRAND_MASTER_CARD` - The card brand is Mastercard.
 *  * `CARD_BRAND_UNION_PAY` - The card brand is UnionPay.
 *  * `CARD_BRAND_UNSPECIFIED` - The card brand is unspecified.
 *  * `CARD_BRAND_VISA` - The card brand is Visa.
 */
export const Brand = {
  CardBrandAmericanExpress: "CARD_BRAND_AMERICAN_EXPRESS",
  CardBrandDiscover: "CARD_BRAND_DISCOVER",
  CardBrandJcb: "CARD_BRAND_JCB",
  CardBrandMasterCard: "CARD_BRAND_MASTER_CARD",
  CardBrandUnionPay: "CARD_BRAND_UNION_PAY",
  CardBrandUnspecified: "CARD_BRAND_UNSPECIFIED",
  CardBrandVisa: "CARD_BRAND_VISA",
} as const;
export type Brand = (typeof Brand)[keyof typeof Brand] | (string & {});

export const brandSchema: EnumSchema<Brand> = s.enumOf<Brand>(Brand);
