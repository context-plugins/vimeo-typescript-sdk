import { s, type EnumSchema } from "../core/index.js";

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
