import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceFormatted = {
  annual: string;
  annualMonthly: string;
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
