import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The codec of the video file.
 *
 * Option descriptions:
 *  * `AV1` - The codec is AV1.
 *  * `H264` - The codec is H264.
 *  * `HEVC` - The codec is HEVC.
 */
export const Codec1 = {
  Av1: "AV1",
  H264: "H264",
  Hevc: "HEVC",
} as const;
export type Codec1 = (typeof Codec1)[keyof typeof Codec1] | (string & {});

export const codec1Schema: EnumSchema<Codec1> = s.enumOf<Codec1>(Codec1);
