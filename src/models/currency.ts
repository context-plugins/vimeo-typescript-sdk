import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Currency = {
  currencyCode: string;
  symbol: string;
};

export const currencySchema: Schema<Currency> = s.object<Currency>({
  currencyCode: s.string(),
  symbol: s.string(),
  _keysMap: {
    currencyCode: "currency_code",
  },
});
