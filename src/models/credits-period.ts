import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditsPeriod = {
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type CreditsPeriod = (typeof CreditsPeriod)[keyof typeof CreditsPeriod] | (string & {});

export const creditsPeriodSchema: EnumSchema<CreditsPeriod> = s.enumOf<CreditsPeriod>(CreditsPeriod);
