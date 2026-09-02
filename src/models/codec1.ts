import { s, type EnumSchema } from "../core/index.js";

export const Codec1 = {
  Av1: "AV1",
  H264: "H264",
  Hevc: "HEVC",
} as const;
export type Codec1 = (typeof Codec1)[keyof typeof Codec1] | (string & {});

export const codec1Schema: EnumSchema<Codec1> = s.enumOf<Codec1>(Codec1);
