import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
