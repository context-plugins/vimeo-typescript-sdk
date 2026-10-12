import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the currency in which the price of the plan is expressed. */
export type Currency = {
  /** The ISO code of the associated currency. */
  currencyCode: string;
  /** The symbol of the associated currency. */
  symbol: string;
};

export const currencySchema: Schema<Currency> = s.object<Currency>({
  currencyCode: s.string(),
  symbol: s.string(),
  _keysMap: {
    currencyCode: "currency_code",
  },
});
