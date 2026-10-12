import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The video's 360 stereo format.
 *
 * Option descriptions:
 *  * `left-right` - The stereo format is left-right.
 *  * `mono` - The audio is monaural.
 *  * `top-bottom` - The stereo format is top-bottom.
 */
export const StereoFormat = {
  LeftRight: "left-right",
  Mono: "mono",
  TopBottom: "top-bottom",
} as const;
export type StereoFormat = (typeof StereoFormat)[keyof typeof StereoFormat] | (string & {});

export const stereoFormatSchema: EnumSchema<StereoFormat> = s.enumOf<StereoFormat>(StereoFormat);
