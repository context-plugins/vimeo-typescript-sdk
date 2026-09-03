import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type25 = {
  Captions: "captions",
  Chapters: "chapters",
  Descriptions: "descriptions",
  Metadata: "metadata",
  Subtitles: "subtitles",
} as const;
export type Type25 = (typeof Type25)[keyof typeof Type25] | (string & {});

export const type25Schema: EnumSchema<Type25> = s.enumOf<Type25>(Type25);
