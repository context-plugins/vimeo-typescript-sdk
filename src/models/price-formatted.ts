import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The price formatted for the selected locale with the associated currency symbol. */
export type PriceFormatted = {
  /** The annual price, charged annually. */
  annual: string;
  /** The monthly price, charged annually. */
  annualMonthly: string;
  /** The monthly price, charged monthly. */
  monthly?: string;
};

export const priceFormattedSchema: Schema<PriceFormatted> = s.object<PriceFormatted>({
  annual: s.string(),
  annualMonthly: s.string(),
  monthly: s.optional(s.string()),
  _keysMap: {
    annualMonthly: "annual_monthly",
  },
});
