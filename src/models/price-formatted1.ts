import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The price map of the promotion formatted for the selected locale. */
export type PriceFormatted1 = {
  /** The promotional annual price, charged annually. */
  annual?: string;
  /** The promotional monthly price, charged annually. */
  annualMonthly?: string;
  /** The promotional monthly price, charged monthly. */
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
