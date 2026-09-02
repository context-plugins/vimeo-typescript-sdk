import { s, type Schema } from "../core/index.js";

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
