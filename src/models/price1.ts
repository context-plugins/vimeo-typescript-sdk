import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price1 = {
  annual?: number;
  annualMonthly?: number;
  monthly?: number;
};

export const price1Schema: Schema<Price1> = s.object<Price1>({
  annual: s.optional(s.number()),
  annualMonthly: s.optional(s.number()),
  monthly: s.optional(s.number()),
  _keysMap: {
    annualMonthly: "annual_monthly",
  },
});
