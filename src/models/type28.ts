import { s, type EnumSchema } from "../core/index.js";

export const Type28 = {
  Captions: "captions",
  Subtitles: "subtitles",
} as const;
export type Type28 = (typeof Type28)[keyof typeof Type28] | (string & {});

export const type28Schema: EnumSchema<Type28> = s.enumOf<Type28>(Type28);
