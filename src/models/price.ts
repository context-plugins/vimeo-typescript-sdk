import { s, type Schema } from "../core/index.js";

export type Price = {
  annual: number;
  annualMonthly: number;
  monthly?: number;
};

export const priceSchema: Schema<Price> = s.object<Price>({
  annual: s.number(),
  annualMonthly: s.number(),
  monthly: s.optional(s.number()),
  _keysMap: {
    annualMonthly: "annual_monthly",
  },
});
