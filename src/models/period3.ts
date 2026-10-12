import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The renewal frequency of the quota.
 *
 * Option descriptions:
 *  * `lifetime` - The user doesn't have a periodic quota.
 *  * `month` - The quota renews monthly.
 *  * `week` - The quota renews weekly.
 *  * `year` - The quota renews yearly.
 */
export const Period3 = {
  Lifetime: "lifetime",
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type Period3 = (typeof Period3)[keyof typeof Period3] | (string & {});

export const period3Schema: EnumSchema<Period3> = s.enumOf<Period3>(Period3);
