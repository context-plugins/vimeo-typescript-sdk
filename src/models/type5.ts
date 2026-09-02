import { s, type EnumSchema } from "../core/index.js";

export const Type5 = {
  Ranking: "ranking",
  Thumbs: "thumbs",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
