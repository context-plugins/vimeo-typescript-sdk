import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type50 = {
  Ranking: "ranking",
  Thumbs: "thumbs",
} as const;
export type Type50 = (typeof Type50)[keyof typeof Type50] | (string & {});

export const type50Schema: EnumSchema<Type50> = s.enumOf<Type50>(Type50);
