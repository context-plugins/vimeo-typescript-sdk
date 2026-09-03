import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
