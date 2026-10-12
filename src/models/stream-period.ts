import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The amount of time that the user has access to the On Demand content after redeeming a
 * promotional code.
 *
 * Option descriptions:
 *  * `1_week` - Access lasts for one week.
 *  * `1_year` - Access lasts for one year.
 *  * `3_month` - Access lasts for three months.
 *  * `6_month` - Access lasts for six months.
 *  * `24_hour` - Access lasts for 24 hours.
 *  * `30_days` - Access lasts for 30 days.
 *  * `48_hour` - Access lasts for 48 hours.
 *  * `72_hour` - Access lasts for 72 hours.
 */
export const StreamPeriod = {
  _1Week: "1_week",
  _1Year: "1_year",
  _3Month: "3_month",
  _6Month: "6_month",
  _24Hour: "24_hour",
  _30Days: "30_days",
  _48Hour: "48_hour",
  _72Hour: "72_hour",
} as const;
export type StreamPeriod = (typeof StreamPeriod)[keyof typeof StreamPeriod] | (string & {});

export const streamPeriodSchema: EnumSchema<StreamPeriod> = s.enumOf<StreamPeriod>(StreamPeriod);
