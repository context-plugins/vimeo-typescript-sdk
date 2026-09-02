import { s, type EnumSchema } from "../core/index.js";

export const CreditsPeriod = {
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type CreditsPeriod = (typeof CreditsPeriod)[keyof typeof CreditsPeriod] | (string & {});

export const creditsPeriodSchema: EnumSchema<CreditsPeriod> = s.enumOf<CreditsPeriod>(CreditsPeriod);
