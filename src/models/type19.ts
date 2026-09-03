import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type19 = {
  Extra: "extra",
  Main: "main",
  Trailer: "trailer",
} as const;
export type Type19 = (typeof Type19)[keyof typeof Type19] | (string & {});

export const type19Schema: EnumSchema<Type19> = s.enumOf<Type19>(Type19);
