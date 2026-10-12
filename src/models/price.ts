import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the prices associated with the plan. */
export type Price = {
  /** The annual price, charged annually. */
  annual: number;
  /** The monthly price, charged annually. */
  annualMonthly: number;
  /** The monthly price, charged monthly. */
  monthly?: number;
};

export const priceSchema: Schema<Price> = s.object<Price>({
  annual: s.float64(),
  annualMonthly: s.float64(),
  monthly: s.optional(s.float64()),
  _keysMap: {
    annualMonthly: "annual_monthly",
  },
});
