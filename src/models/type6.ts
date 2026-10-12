import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of video file.
 *
 * Option descriptions:
 *  * `source` - The video file is a source file.
 *  * `video/mp4` - The video file is in MP4 format.
 *  * `video/webm` - The video file is in WebM format.
 *  * `vp6/x-video` - The video file is in VP6 format.
 */
export const Type6 = {
  Source: "source",
  VideoMp4: "video/mp4",
  VideoWebm: "video/webm",
  Vp6XVideo: "vp6/x-video",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
