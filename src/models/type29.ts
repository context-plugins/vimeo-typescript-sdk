import { s, type EnumSchema } from "../core/index.js";

export const Type29 = {
  Captions: "captions",
  Chapters: "chapters",
  Descriptions: "descriptions",
  Metadata: "metadata",
  Subtitles: "subtitles",
} as const;
export type Type29 = (typeof Type29)[keyof typeof Type29] | (string & {});

export const type29Schema: EnumSchema<Type29> = s.enumOf<Type29>(Type29);
