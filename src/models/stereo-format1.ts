import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The 360 spatial stereo format.
 *
 * Option descriptions:
 *  * `left-right` - Use left-right stereo.
 *  * `mono` - Use monaural audio.
 *  * `top-bottom` - Use top-bottom stereo.
 */
export const StereoFormat1 = {
  LeftRight: "left-right",
  Mono: "mono",
  TopBottom: "top-bottom",
} as const;
export type StereoFormat1 = (typeof StereoFormat1)[keyof typeof StereoFormat1] | (string & {});

export const stereoFormat1Schema: EnumSchema<StereoFormat1> = s.enumOf<StereoFormat1>(StereoFormat1);
