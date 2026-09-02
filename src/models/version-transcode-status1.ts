import { s, type EnumSchema } from "../core/index.js";

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
