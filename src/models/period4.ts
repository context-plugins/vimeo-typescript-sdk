import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Period4 = {
  _1Day: "1 day",
  _1Month: "1 month",
  _1Week: "1 week",
  _1Year: "1 year",
  _2Day: "2 day",
  _3Day: "3 day",
  _3Month: "3 month",
  _6Month: "6 month",
  _7Day: "7 day",
  _24Hour: "24 hour",
  _30Day: "30 day",
  _48Hour: "48 hour",
  _60Day: "60 day",
  _72Hour: "72 hour",
} as const;
export type Period4 = (typeof Period4)[keyof typeof Period4] | (string & {});

export const period4Schema: EnumSchema<Period4> = s.enumOf<Period4>(Period4);
