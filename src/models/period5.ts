import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The rental period of the episode.
 *
 * Option descriptions:
 *  * `1 week` - The episode can be rented for a maximum of 1 week.
 *  * `1 year` - The episode can be rented for a maximum of 1 year.
 *  * `3 month` - The episode can be rented for a maximum of 3 months.
 *  * `6 month` - The episode can be rented for a maximum of 6 months.
 *  * `24 hour` - The episode can be rented for a maximum of 24 hours.
 *  * `30 day` - The episode can be rented for a maximum of 30 days.
 *  * `48 hour` - The episode can be rented for a maximum of 48 hours.
 *  * `72 hour` - The episode can be rented for a maximum of 72 hours.
 */
export const Period5 = {
  _1Week: "1 week",
  _1Year: "1 year",
  _3Month: "3 month",
  _6Month: "6 month",
  _24Hour: "24 hour",
  _30Day: "30 day",
  _48Hour: "48 hour",
  _72Hour: "72 hour",
} as const;
export type Period5 = (typeof Period5)[keyof typeof Period5] | (string & {});

export const period5Schema: EnumSchema<Period5> = s.enumOf<Period5>(Period5);
