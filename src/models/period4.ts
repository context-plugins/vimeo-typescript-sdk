import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The rental period for the video.
 *
 * Option descriptions:
 *  * `1 day` - The rental period is one day.
 *  * `1 month` - The rental period is one month.
 *  * `1 week` - The rental period is one week.
 *  * `1 year` - The rental period is one year.
 *  * `2 day` - The rental period is two days.
 *  * `3 day` - The rental period is three days.
 *  * `3 month` - The rental period is three months.
 *  * `6 month` - The rental period is six months.
 *  * `7 day` - The rental period is seven days.
 *  * `24 hour` - The rental period is 24 hours.
 *  * `30 day` - The rental period is 30 days.
 *  * `48 hour` - The rental period is 48 hours.
 *  * `60 day` - The rental period is 60 days.
 *  * `72 hour` - The rental period is 72 hours.
 */
export const Period4 = {
  _1Day: "1 day",
  _1Month: "1 month",
  _1Week: "1 week",
  _1Year: "1 year",
  _2Day: "2 day",
  _3Day: "3 day",
  _3Month: "3 month",
  _6Month: "6 month",
  _7Day: "7 day",
  _24Hour: "24 hour",
  _30Day: "30 day",
  _48Hour: "48 hour",
  _60Day: "60 day",
  _72Hour: "72 hour",
} as const;
export type Period4 = (typeof Period4)[keyof typeof Period4] | (string & {});

export const period4Schema: EnumSchema<Period4> = s.enumOf<Period4>(Period4);
