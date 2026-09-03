import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type24 = {
  Captions: "captions",
  Subtitles: "subtitles",
} as const;
export type Type24 = (typeof Type24)[keyof typeof Type24] | (string & {});

export const type24Schema: EnumSchema<Type24> = s.enumOf<Type24>(Type24);
