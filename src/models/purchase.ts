import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status20Schema, type Status20 } from "./status20.js";
import { uriSchema, type Uri } from "./uri.js";

export type Purchase = {
  /**
   * The purchase status of the product.
   *
   * Option descriptions:
   *  * `available` - The product is available for purchase.
   *  * `purchased` - The product is already purchased.
   *  * `unavailable` - The product isn't available for purchase.
   */
  status: Status20;
  /** The redirect URIs associated with the plan. */
  uri: Uri;
};

export const purchaseSchema: Schema<Purchase> = s.object<Purchase>({
  status: status20Schema,
  uri: uriSchema,
});
