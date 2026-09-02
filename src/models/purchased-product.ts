import { s, type Schema } from "../core/index.js";

export type PurchasedProduct = {
  displayPrice: number;
  displayPriceFormatted: string;
  isMonthly: boolean;
};

export const purchasedProductSchema: Schema<PurchasedProduct> = s.object<PurchasedProduct>({
  displayPrice: s.number(),
  displayPriceFormatted: s.string(),
  isMonthly: s.boolean(),
  _keysMap: {
    displayPrice: "display_price",
    displayPriceFormatted: "display_price_formatted",
    isMonthly: "is_monthly",
  },
});
