import { s, type EnumSchema } from "../core/index.js";

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
