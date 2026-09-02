import { s, type EnumSchema } from "../core/index.js";

export const Status5 = {
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
export type Status5 = (typeof Status5)[keyof typeof Status5] | (string & {});

export const status5Schema: EnumSchema<Status5> = s.enumOf<Status5>(Status5);
