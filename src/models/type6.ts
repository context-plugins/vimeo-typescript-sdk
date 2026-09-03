import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type6 = {
  Source: "source",
  VideoMp4: "video/mp4",
  VideoWebm: "video/webm",
  Vp6XVideo: "vp6/x-video",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
