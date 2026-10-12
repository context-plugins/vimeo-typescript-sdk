import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The transcode status code of the video version.
 *
 * Option descriptions:
 *  * `complete` - Transcoding is complete. The video version is available.
 *  * `error` - There was a transcoding error. The video version isn't available.
 *  * `in_progress` - Transcoding is in progress. The video version isn't available yet.
 */
export const VersionTranscodeStatus1 = {
  Complete: "complete",
  Error: "error",
  InProgress: "in_progress",
} as const;
export type VersionTranscodeStatus1 =
  | (typeof VersionTranscodeStatus1)[keyof typeof VersionTranscodeStatus1]
  | (string & {});

export const versionTranscodeStatus1Schema: EnumSchema<VersionTranscodeStatus1> =
  s.enumOf<VersionTranscodeStatus1>(VersionTranscodeStatus1);
