import { s, type EnumSchema } from "../core/index.js";

export const QuotaPeriod = {
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type QuotaPeriod = (typeof QuotaPeriod)[keyof typeof QuotaPeriod] | (string & {});

export const quotaPeriodSchema: EnumSchema<QuotaPeriod> = s.enumOf<QuotaPeriod>(QuotaPeriod);
