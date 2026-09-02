import { s, type Schema } from "../core/index.js";
import { priceFormatted1Schema, type PriceFormatted1 } from "./price-formatted1.js";
import { price1Schema, type Price1 } from "./price1.js";
import { uri1Schema, type Uri1 } from "./uri1.js";

export type Promotion = {
  code: string;
  discount: number;
  price: Price1;
  priceFormatted: PriceFormatted1;
  uri: Uri1;
};

export const promotionSchema: Schema<Promotion> = s.object<Promotion>({
  code: s.string(),
  discount: s.number(),
  price: price1Schema,
  priceFormatted: priceFormatted1Schema,
  uri: uri1Schema,
  _keysMap: {
    priceFormatted: "price_formatted",
  },
});
