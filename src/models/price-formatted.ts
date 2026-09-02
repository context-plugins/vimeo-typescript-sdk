import { s, type Schema } from "../core/index.js";

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
