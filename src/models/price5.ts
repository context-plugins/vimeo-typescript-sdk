import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Price5 = {
  aud?: number;
  cad?: number;
  chf?: number;
  dkk?: number;
  eur?: number;
  gbp?: number;
  jpy?: number;
  krw?: number;
  nok?: number;
  pln?: number;
  sek?: number;
  usd?: number;
};

export const price5Schema: Schema<Price5> = s.object<Price5>({
  aud: s.optional(s.number()),
  cad: s.optional(s.number()),
  chf: s.optional(s.number()),
  dkk: s.optional(s.number()),
  eur: s.optional(s.number()),
  gbp: s.optional(s.number()),
  jpy: s.optional(s.number()),
  krw: s.optional(s.number()),
  nok: s.optional(s.number()),
  pln: s.optional(s.number()),
  sek: s.optional(s.number()),
  usd: s.optional(s.number()),
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
