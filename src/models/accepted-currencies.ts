import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An array of accepted currencies.
 *
 * Option descriptions:
 *  * `AUD` - The currency is in Australian dollars.
 *  * `CAD` - The currency is in Canadian dollars.
 *  * `CHF` - The currency is in Swiss francs.
 *  * `DKK` - The currency is in Danish krone.
 *  * `EUR` - The currency is in euros.
 *  * `GBP` - The currency is in British pounds.
 *  * `JPY` - The currency is in Japanese yen.
 *  * `KRW` - The currency is in South Korean won.
 *  * `NOK` - The currency is in Norwegian krone.
 *  * `PLN` - The currency is in Polish zloty.
 *  * `SEK` - The currency is in Swedish krona.
 *  * `USD` - The currency is in United States dollars.
 */
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
