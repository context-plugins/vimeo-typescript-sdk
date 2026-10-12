import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of the video storage for the user's periodic quota for the annual plan.
 *
 * Option descriptions:
 *  * `video_count` - The product has video storage based on video count.
 *  * `video_size` - The product has video storage based on video size.
 */
export const QuotaUnit = {
  VideoCount: "video_count",
  VideoSize: "video_size",
} as const;
export type QuotaUnit = (typeof QuotaUnit)[keyof typeof QuotaUnit] | (string & {});

export const quotaUnitSchema: EnumSchema<QuotaUnit> = s.enumOf<QuotaUnit>(QuotaUnit);
