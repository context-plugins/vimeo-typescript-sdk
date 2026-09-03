import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Codec = {
  Av1: "AV1",
  H264: "H264",
  Hevc: "HEVC",
  Aac: "aac",
} as const;
export type Codec = (typeof Codec)[keyof typeof Codec] | (string & {});

export const codecSchema: EnumSchema<Codec> = s.enumOf<Codec>(Codec);
