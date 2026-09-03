import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StereoFormat = {
  LeftRight: "left-right",
  Mono: "mono",
  TopBottom: "top-bottom",
} as const;
export type StereoFormat = (typeof StereoFormat)[keyof typeof StereoFormat] | (string & {});

export const stereoFormatSchema: EnumSchema<StereoFormat> = s.enumOf<StereoFormat>(StereoFormat);
