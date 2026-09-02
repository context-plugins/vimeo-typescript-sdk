import { s, type EnumSchema } from "../core/index.js";

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
