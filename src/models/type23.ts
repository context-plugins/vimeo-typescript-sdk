import { s, type EnumSchema } from "../core/index.js";

export const Type23 = {
  Extra: "extra",
  Main: "main",
  Trailer: "trailer",
} as const;
export type Type23 = (typeof Type23)[keyof typeof Type23] | (string & {});

export const type23Schema: EnumSchema<Type23> = s.enumOf<Type23>(Type23);
