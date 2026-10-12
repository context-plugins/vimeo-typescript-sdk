import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The time period for which the DRM usage activity is evaluated.
 *
 * Option descriptions:
 *  * `lifetime` - The quota period is for the lifetime of the account.
 *  * `year` - The quota period is one year.
 */
export const Period2 = {
  Lifetime: "lifetime",
  Year: "year",
} as const;
export type Period2 = (typeof Period2)[keyof typeof Period2] | (string & {});

export const period2Schema: EnumSchema<Period2> = s.enumOf<Period2>(Period2);
