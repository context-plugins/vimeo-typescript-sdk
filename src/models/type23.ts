import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type23 = {
  Extra: "extra",
  Main: "main",
  Trailer: "trailer",
} as const;
export type Type23 = (typeof Type23)[keyof typeof Type23] | (string & {});

export const type23Schema: EnumSchema<Type23> = s.enumOf<Type23>(Type23);
