import { s, type EnumSchema } from "../core/index.js";

export const Codec = {
  Av1: "AV1",
  H264: "H264",
  Hevc: "HEVC",
  Aac: "aac",
} as const;
export type Codec = (typeof Codec)[keyof typeof Codec] | (string & {});

export const codecSchema: EnumSchema<Codec> = s.enumOf<Codec>(Codec);
