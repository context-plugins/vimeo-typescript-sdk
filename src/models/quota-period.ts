import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The quota period unit for the user's bandwidth quota.
 *
 * Option descriptions:
 *  * `month` - The product has a monthly bandwidth quota period.
 *  * `week` - The product has a weekly bandwidth quota period.
 *  * `year` - The product has a yearly bandwidth quota period.
 */
export const QuotaPeriod = {
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type QuotaPeriod = (typeof QuotaPeriod)[keyof typeof QuotaPeriod] | (string & {});

export const quotaPeriodSchema: EnumSchema<QuotaPeriod> = s.enumOf<QuotaPeriod>(QuotaPeriod);
