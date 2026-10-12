import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitlementsSchema, type Entitlements } from "./entitlements.js";
import { interactions15Schema, type Interactions15 } from "./interactions15.js";
import { purchasedProductSchema, type PurchasedProduct } from "./purchased-product.js";

/** The URLs and entitlements of the associated products in the store. */
export type Metadata25 = {
  /** The URLs and entitlements of the associated products in the store. */
  entitlements: Entitlements;
  interactions: Interactions15;
  /** Whether the product is a bandwidth product. */
  isBandwidthProduct: boolean;
  /** Whether the product is a Vimeo payments service product. */
  isPsPlan: boolean;
  /** Information about the purchased product. */
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
