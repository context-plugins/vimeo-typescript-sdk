import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price7 = {
  /** The purchase price of the video in Australian dollars. */
  aud?: number;
  /** The purchase price of the video in Canadian dollars. */
  cad?: number;
  /** The purchase price of the video in Swiss francs. */
  chf?: number;
  /** The purchase price of the video in Danish krone. */
  dkk?: number;
  /** The purchase price of the video in euros. */
  eur?: number;
  /** The purchase price of the video in British pounds. */
  gbp?: number;
  /** The purchase price of the video in Japanese yen. */
  jpy?: number;
  /** The purchase price of the video in South Korean won. */
  krw?: number;
  /** The purchase price of the video in Norwegian krone. */
  nok?: number;
  /** The purchase price of the video in Polish zloty. */
  pln?: number;
  /** The purchase price of the video in Swedish krona. */
  sek?: number;
  /**
   * The purchase price of the video in United States dollars. This parameter is required when
   * **buy.active** is `true`.
   */
  usd?: number;
};

export const price7Schema: Schema<Price7> = s.object<Price7>({
  aud: s.optional(s.float64()),
  cad: s.optional(s.float64()),
  chf: s.optional(s.float64()),
  dkk: s.optional(s.float64()),
  eur: s.optional(s.float64()),
  gbp: s.optional(s.float64()),
  jpy: s.optional(s.float64()),
  krw: s.optional(s.float64()),
  nok: s.optional(s.float64()),
  pln: s.optional(s.float64()),
  sek: s.optional(s.float64()),
  usd: s.optional(s.float64()),
  _keysMap: {
    aud: "AUD",
    cad: "CAD",
    chf: "CHF",
    dkk: "DKK",
    eur: "EUR",
    gbp: "GBP",
    jpy: "JPY",
    krw: "KRW",
    nok: "NOK",
    pln: "PLN",
    sek: "SEK",
    usd: "USD",
  },
});
