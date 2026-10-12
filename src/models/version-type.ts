import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the version.
 *
 * Option descriptions:
 *  * `regular` - The version was generated through a file upload.
 *  * `screen-recording` - The version was generated through Vimeo Record.
 *  * `vimeo-create` - The version was generated through Vimeo Create.
 */
export const VersionType = {
  Regular: "regular",
  ScreenRecording: "screen-recording",
  VimeoCreate: "vimeo-create",
} as const;
export type VersionType = (typeof VersionType)[keyof typeof VersionType] | (string & {});

export const versionTypeSchema: EnumSchema<VersionType> = s.enumOf<VersionType>(VersionType);
