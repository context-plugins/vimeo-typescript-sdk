import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status4 = {
  Available: "available",
  Failed: "failed",
  Processing: "processing",
  QuotaExceeded: "quota_exceeded",
  TotalCapExceeded: "total_cap_exceeded",
  TranscodeStarting: "transcode_starting",
  Transcoding: "transcoding",
  TranscodingError: "transcoding_error",
  Unavailable: "unavailable",
  Uploading: "uploading",
  UploadingError: "uploading_error",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
