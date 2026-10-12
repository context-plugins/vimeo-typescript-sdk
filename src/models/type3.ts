import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of video file.
 *
 * Option descriptions:
 *  * `audio/mp4` - The file is an audio-only MPEG-4 container.
 *  * `source` - The video file is a source file.
 *  * `video/mp4` - The video file is in MP4 format.
 *  * `video/webm` - The video file is in WebM format.
 *  * `vp6/x-video` - The video file is in VP6 format.
 */
export const Type3 = {
  AudioMp4: "audio/mp4",
  Source: "source",
  VideoMp4: "video/mp4",
  VideoWebm: "video/webm",
  Vp6XVideo: "vp6/x-video",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
