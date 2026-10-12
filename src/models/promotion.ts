import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceFormatted1Schema, type PriceFormatted1 } from "./price-formatted1.js";
import { price1Schema, type Price1 } from "./price1.js";
import { uri1Schema, type Uri1 } from "./uri1.js";

/** Information about the plan's promotion. */
export type Promotion = {
  /** The promotion code. */
  code: string;
  /** The promotion discount percentage. */
  discount: number;
  /** The price map of the promotion. */
  price: Price1;
  /** The price map of the promotion formatted for the selected locale. */
  priceFormatted: PriceFormatted1;
  /** Information about the URIs associated with the promotion. */
  uri: Uri1;
};

export const promotionSchema: Schema<Promotion> = s.object<Promotion>({
  code: s.string(),
  discount: s.float64(),
  price: price1Schema,
  priceFormatted: priceFormatted1Schema,
  uri: uri1Schema,
  _keysMap: {
    priceFormatted: "price_formatted",
  },
});
