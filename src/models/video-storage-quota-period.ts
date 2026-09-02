import { s, type EnumSchema } from "../core/index.js";

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
