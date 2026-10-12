import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The rental period of the video.
 *
 * Option descriptions:
 *  * `1 week` - The video can be rented for a maximum of 1 week.
 *  * `1 year` - The video can be rented for a maximum of 1 year.
 *  * `3 month` - The video can be rented for a maximum of 3 months.
 *  * `6 month` - The video can be rented for a maximum of 6 months.
 *  * `24 hour` - The video can be rented for a maximum of 24 hours.
 *  * `30 day` - The video can be rented for a maximum of 30 days.
 *  * `48 hour` - The video can be rented for a maximum of 48 hours.
 *  * `72 hour` - The video can be rented for a maximum of 72 hours.
 */
export const Period6 = {
  _1Week: "1 week",
  _1Year: "1 year",
  _3Month: "3 month",
  _6Month: "6 month",
  _24Hour: "24 hour",
  _30Day: "30 day",
  _48Hour: "48 hour",
  _72Hour: "72 hour",
} as const;
export type Period6 = (typeof Period6)[keyof typeof Period6] | (string & {});

export const period6Schema: EnumSchema<Period6> = s.enumOf<Period6>(Period6);
