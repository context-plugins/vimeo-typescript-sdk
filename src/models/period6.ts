import { s, type EnumSchema } from "../core/index.js";

export const Period6 = {
  _1Week: "1 week",
  _1Year: "1 year",
  _3Month: "3 month",
  _6Month: "6 month",
  _24Hour: "24 hour",
  _30Day: "30 day",
  _48Hour: "48 hour",
  _72Hour: "72 hour",
} as const;
export type Period6 = (typeof Period6)[keyof typeof Period6] | (string & {});

export const period6Schema: EnumSchema<Period6> = s.enumOf<Period6>(Period6);
