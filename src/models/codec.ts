import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The codec of the video file.
 *
 * Option descriptions:
 *  * `AV1` - The codec is AV1.
 *  * `H264` - The codec is H264.
 *  * `HEVC` - The codec is HEVC.
 *  * `aac` - The audio codec is AAC.
 */
export const Codec = {
  Av1: "AV1",
  H264: "H264",
  Hevc: "HEVC",
  Aac: "aac",
} as const;
export type Codec = (typeof Codec)[keyof typeof Codec] | (string & {});

export const codecSchema: EnumSchema<Codec> = s.enumOf<Codec>(Codec);
