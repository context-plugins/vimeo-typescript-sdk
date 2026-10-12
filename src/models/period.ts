import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The time period for which the AI credit activity is evaluated.
 *
 * Option descriptions:
 *  * `lifetime` - The quota period is for the lifetime of the account.
 *  * `month` - The quota period is one month.
 *  * `week` - The quota period is one week.
 *  * `year` - The quota period is one year.
 */
export const Period = {
  Lifetime: "lifetime",
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type Period = (typeof Period)[keyof typeof Period] | (string & {});

export const periodSchema: EnumSchema<Period> = s.enumOf<Period>(Period);
