import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The amount of time for which the user can access On Demand content upon redeeming a promotion
 * code. This parameter is required only when the streaming period isn't defined in the On Demand
 * container, or when creating promotions where **access_type** is `vip` or **product_type** is
 * `rent`.
 *
 * Option descriptions:
 *  * `1_week` - The user can access On Demand content for a maximum of 1 week after redeeming a
 *    promotion code.
 *  * `1_year` - The user can access On Demand content for a maximum of 1 year after redeeming a
 *    promotion code.
 *  * `3_month` - The user can access On Demand content for a maximum of 3 months after redeeming a
 *    promotion code.
 *  * `6_month` - The user can access On Demand content for a maximum of 6 months after redeeming a
 *    promotion code.
 *  * `24_hour` - The user can access On Demand content for a maximum of 24 hours after redeeming a
 *    promotion code.
 *  * `30_day` - The user can access On Demand content for a maximum of 30 days after redeeming a
 *    promotion code.
 *  * `48_hour` - The user can access On Demand content for a maximum of 48 hours after redeeming a
 *    promotion code.
 *  * `72_hour` - The user can access On Demand content for a maximum of 72 hours after redeeming a
 *    promotion code.
 */
export const StreamPeriod1 = {
  _1Week: "1_week",
  _1Year: "1_year",
  _3Month: "3_month",
  _6Month: "6_month",
  _24Hour: "24_hour",
  _30Day: "30_day",
  _48Hour: "48_hour",
  _72Hour: "72_hour",
} as const;
export type StreamPeriod1 = (typeof StreamPeriod1)[keyof typeof StreamPeriod1] | (string & {});

export const streamPeriod1Schema: EnumSchema<StreamPeriod1> = s.enumOf<StreamPeriod1>(StreamPeriod1);
