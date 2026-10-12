import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The quota period unit for the user's AI credits quota.
 *
 * Option descriptions:
 *  * `month` - The product has a monthly AI credits quota period.
 *  * `week` - The product has a weekly AI credits quota period.
 *  * `year` - The product has a yearly AI credits quota period.
 */
export const CreditsPeriod = {
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type CreditsPeriod = (typeof CreditsPeriod)[keyof typeof CreditsPeriod] | (string & {});

export const creditsPeriodSchema: EnumSchema<CreditsPeriod> = s.enumOf<CreditsPeriod>(CreditsPeriod);
