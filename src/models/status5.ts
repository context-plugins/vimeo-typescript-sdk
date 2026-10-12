import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status code for the availability of the video.
 *
 * Option descriptions:
 *  * `available` - The video is available.
 *  * `failed` - There was an error in rendering the video.
 *  * `processing` - Rendering has started and is currently underway for the video.
 *  * `quota_exceeded` - The user's weekly upload quota is exceeded with this video.
 *  * `total_cap_exceeded` - The user's total storage limit is exceeded with this video.
 *  * `transcode_starting` - Transcoding is starting for the video.
 *  * `transcoding` - Transcoding has started and is currently underway for the video.
 *  * `transcoding_error` - There was an error in transcoding the video.
 *  * `unavailable` - The video is unavailable.
 *  * `uploading` - The video is being uploaded.
 *  * `uploading_error` - There was an error in uploading the video.
 */
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
