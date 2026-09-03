import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type33 = {
  Film: "film",
  Series: "series",
} as const;
export type Type33 = (typeof Type33)[keyof typeof Type33] | (string & {});

export const type33Schema: EnumSchema<Type33> = s.enumOf<Type33>(Type33);
