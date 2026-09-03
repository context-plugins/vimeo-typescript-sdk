import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitlementsSchema, type Entitlements } from "./entitlements.js";
import { interactions15Schema, type Interactions15 } from "./interactions15.js";
import { purchasedProductSchema, type PurchasedProduct } from "./purchased-product.js";

export type Metadata25 = {
  entitlements: Entitlements;
  interactions: Interactions15;
  isBandwidthProduct: boolean;
  isPsPlan: boolean;
  purchasedProduct: PurchasedProduct;
};

export const metadata25Schema: Schema<Metadata25> = s.object<Metadata25>({
  entitlements: entitlementsSchema,
  interactions: interactions15Schema,
  isBandwidthProduct: s.boolean(),
  isPsPlan: s.boolean(),
  purchasedProduct: purchasedProductSchema,
  _keysMap: {
    isBandwidthProduct: "is_bandwidth_product",
    isPsPlan: "is_ps_plan",
    purchasedProduct: "purchased_product",
  },
});
