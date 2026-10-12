import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";
import { discountSchema, type Discount } from "./discount.js";
import { idSchema, type Id } from "./id.js";
import { metadata25Schema, type Metadata25 } from "./metadata25.js";
import { priceFormattedSchema, type PriceFormatted } from "./price-formatted.js";
import { priceSchema, type Price } from "./price.js";
import { promotionSchema, type Promotion } from "./promotion.js";
import { tierSchema, type Tier } from "./tier.js";

export type SubscriptionPlans = {
  /** Information about the currency in which the price of the plan is expressed. */
  currency: Currency;
  /** Information about the plan discount. */
  discount: Discount;
  /** The SKUs of the plans. */
  id: Id;
  /** The URLs and entitlements of the associated products in the store. */
  metadata: Metadata25;
  /** The name of the plan. */
  name: string;
  /** Information about the prices associated with the plan. */
  price: Price;
  /** The price formatted for the selected locale with the associated currency symbol. */
  priceFormatted: PriceFormatted;
  /** Information about the plan's promotion. */
  promotion: Promotion;
  /**
   * The plan type.
   *
   * Option descriptions:
   *  * `advanced` - The plan type is Vimeo Advanced.
   *  * `basic` - The plan type is Vimeo Basic.
   *  * `business` - The plan type is Vimeo Business.
   *  * `core` - The plan type is Vimeo Core.
   *  * `creator` - The plan type is Vimeo Creator.
   *  * `customSelfServe` - The plan type is Vimeo Custom.
   *  * `enterprise` - The plan type is Vimeo Enterprise.
   *  * `free` - The plan type is Vimeo Free.
   *  * `livePremium` - The plan type is Vimeo Premium.
   *  * `ott` - The plan type is Vimeo OTT.
   *  * `plus` - The plan type is Vimeo Plus.
   *  * `pro` - The plan type is Vimeo Pro.
   *  * `proSolution` - The plan type is Vimeo Pro Solution.
   *  * `proUnlimited` - The plan type is Vimeo Pro Unlimited.
   *  * `production` - The plan type is Vimeo Production.
   *  * `professional` - The plan type is Vimeo Professional.
   *  * `standard` - The plan type is Vimeo Standard.
   *  * `starter` - The plan type is Vimeo Starter.
   *  * `studio` - The plan type is Vimeo Studio.
   *  * `team` - The plan type is Vimeo Team.
   *  * `teamLive` - The plan type is Vimeo Team Live.
   */
  tier: Tier;
  /** The URI of the plan. */
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
