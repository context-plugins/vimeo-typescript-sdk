import { s, type EnumSchema } from "../core/index.js";

export const AcceptedCurrencies = {
  Aud: "AUD",
  Cad: "CAD",
  Chf: "CHF",
  Dkk: "DKK",
  Eur: "EUR",
  Gbp: "GBP",
  Jpy: "JPY",
  Krw: "KRW",
  Nok: "NOK",
  Pln: "PLN",
  Sek: "SEK",
  Usd: "USD",
} as const;
export type AcceptedCurrencies = (typeof AcceptedCurrencies)[keyof typeof AcceptedCurrencies] | (string & {});

export const acceptedCurrenciesSchema: EnumSchema<AcceptedCurrencies> =
  s.enumOf<AcceptedCurrencies>(AcceptedCurrencies);
