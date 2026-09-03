import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceFormatted1 = {
  annual?: string;
  annualMonthly?: string;
  monthly?: string;
};

export const priceFormatted1Schema: Schema<PriceFormatted1> = s.object<PriceFormatted1>({
  annual: s.optional(s.string()),
  annualMonthly: s.optional(s.string()),
  monthly: s.optional(s.string()),
  _keysMap: {
    annualMonthly: "annual_monthly",
  },
});
