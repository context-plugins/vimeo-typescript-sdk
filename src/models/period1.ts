import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The quota period for which the bandwidth is evaluated.
 *
 * Option descriptions:
 *  * `calendar_month` - The quota period is one month.
 *  * `year` - The quota period is one year.
 */
export const Period1 = {
  CalendarMonth: "calendar_month",
  Year: "year",
} as const;
export type Period1 = (typeof Period1)[keyof typeof Period1] | (string & {});

export const period1Schema: EnumSchema<Period1> = s.enumOf<Period1>(Period1);
