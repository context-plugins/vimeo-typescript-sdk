import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The price map of the promotion. */
export type Price1 = {
  /** The promotional annual price, charged annually. */
  annual?: number;
  /** The promotional monthly price, charged annually. */
  annualMonthly?: number;
  /** The promotional monthly price, charged monthly. */
  monthly?: number;
};

export const price1Schema: Schema<Price1> = s.object<Price1>({
  annual: s.optional(s.float64()),
  annualMonthly: s.optional(s.float64()),
  monthly: s.optional(s.float64()),
  _keysMap: {
    annualMonthly: "annual_monthly",
  },
});
