import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type54 = {
  Ranking: "ranking",
  Thumbs: "thumbs",
} as const;
export type Type54 = (typeof Type54)[keyof typeof Type54] | (string & {});

export const type54Schema: EnumSchema<Type54> = s.enumOf<Type54>(Type54);
