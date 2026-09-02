import { s, type EnumSchema } from "../core/index.js";

export const QuotaPeriod1 = {
  Lifetime: "lifetime",
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type QuotaPeriod1 = (typeof QuotaPeriod1)[keyof typeof QuotaPeriod1] | (string & {});

export const quotaPeriod1Schema: EnumSchema<QuotaPeriod1> = s.enumOf<QuotaPeriod1>(QuotaPeriod1);
