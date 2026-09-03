import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VersionType = {
  Regular: "regular",
  ScreenRecording: "screen-recording",
  VimeoCreate: "vimeo-create",
} as const;
export type VersionType = (typeof VersionType)[keyof typeof VersionType] | (string & {});

export const versionTypeSchema: EnumSchema<VersionType> = s.enumOf<VersionType>(VersionType);
