import { s, type EnumSchema } from "../core/index.js";

export const Type54 = {
  Ranking: "ranking",
  Thumbs: "thumbs",
} as const;
export type Type54 = (typeof Type54)[keyof typeof Type54] | (string & {});

export const type54Schema: EnumSchema<Type54> = s.enumOf<Type54>(Type54);
