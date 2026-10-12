import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the purchased product. */
export type PurchasedProduct = {
  /** The display price of the purchased product. */
  displayPrice: number;
  /** The display price of the purchased product formatted for the selected locale. */
  displayPriceFormatted: string;
  /** Whether the purchased product is billed as a monthly subscription. */
  isMonthly: boolean;
};

export const purchasedProductSchema: Schema<PurchasedProduct> = s.object<PurchasedProduct>({
  displayPrice: s.float64(),
  displayPriceFormatted: s.string(),
  isMonthly: s.boolean(),
  _keysMap: {
    displayPrice: "display_price",
    displayPriceFormatted: "display_price_formatted",
    isMonthly: "is_monthly",
  },
});
