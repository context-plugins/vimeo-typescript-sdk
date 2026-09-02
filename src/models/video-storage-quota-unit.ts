import { s, type EnumSchema } from "../core/index.js";

export const VideoStorageQuotaUnit = {
  VideoCount: "video_count",
  VideoSize: "video_size",
} as const;
export type VideoStorageQuotaUnit =
  | (typeof VideoStorageQuotaUnit)[keyof typeof VideoStorageQuotaUnit]
  | (string & {});

export const videoStorageQuotaUnitSchema: EnumSchema<VideoStorageQuotaUnit> =
  s.enumOf<VideoStorageQuotaUnit>(VideoStorageQuotaUnit);
