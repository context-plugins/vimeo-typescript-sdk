import { s, type EnumSchema } from "../core/index.js";

export const Type3 = {
  AudioMp4: "audio/mp4",
  Source: "source",
  VideoMp4: "video/mp4",
  VideoWebm: "video/webm",
  Vp6XVideo: "vp6/x-video",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
