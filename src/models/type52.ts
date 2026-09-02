import { s, type EnumSchema } from "../core/index.js";

export const Type52 = {
  Dubbing: "dubbing",
  Subtitling: "subtitling",
  Transcription: "transcription",
} as const;
export type Type52 = (typeof Type52)[keyof typeof Type52] | (string & {});

export const type52Schema: EnumSchema<Type52> = s.enumOf<Type52>(Type52);
