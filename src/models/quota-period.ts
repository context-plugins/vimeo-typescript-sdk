import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QuotaPeriod = {
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type QuotaPeriod = (typeof QuotaPeriod)[keyof typeof QuotaPeriod] | (string & {});

export const quotaPeriodSchema: EnumSchema<QuotaPeriod> = s.enumOf<QuotaPeriod>(QuotaPeriod);
