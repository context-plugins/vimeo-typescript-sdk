import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video storage quota period for the annual plan.
 *
 * Option descriptions:
 *  * `lifetime` - The product has a lifetime video storage quota period.
 *  * `month` - The product has a monthly video storage quota period.
 *  * `week` - The product has a weekly video storage quota period.
 *  * `year` - The product has a yearly video storage quota period.
 */
export const VideoStorageQuotaPeriod = {
  Lifetime: "lifetime",
  Month: "month",
  Week: "week",
  Year: "year",
} as const;
export type VideoStorageQuotaPeriod =
  | (typeof VideoStorageQuotaPeriod)[keyof typeof VideoStorageQuotaPeriod]
  | (string & {});

export const videoStorageQuotaPeriodSchema: EnumSchema<VideoStorageQuotaPeriod> =
  s.enumOf<VideoStorageQuotaPeriod>(VideoStorageQuotaPeriod);
