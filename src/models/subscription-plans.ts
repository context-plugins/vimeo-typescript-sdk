import { s, type Schema } from "../core/index.js";
import { currencySchema, type Currency } from "./currency.js";
import { discountSchema, type Discount } from "./discount.js";
import { idSchema, type Id } from "./id.js";
import { metadata25Schema, type Metadata25 } from "./metadata25.js";
import { priceFormattedSchema, type PriceFormatted } from "./price-formatted.js";
import { priceSchema, type Price } from "./price.js";
import { promotionSchema, type Promotion } from "./promotion.js";
import { tierSchema, type Tier } from "./tier.js";

export type SubscriptionPlans = {
  currency: Currency;
  discount: Discount;
  id: Id;
  metadata: Metadata25;
  name: string;
  price: Price;
  priceFormatted: PriceFormatted;
  promotion: Promotion;
  tier: Tier;
  uri: string;
};

export const subscriptionPlansSchema: Schema<SubscriptionPlans> = s.object<SubscriptionPlans>({
  currency: currencySchema,
  discount: discountSchema,
  id: idSchema,
  metadata: metadata25Schema,
  name: s.string(),
  price: priceSchema,
  priceFormatted: priceFormattedSchema,
  promotion: promotionSchema,
  tier: tierSchema,
  uri: s.string(),
  _keysMap: {
    priceFormatted: "price_formatted",
  },
});
