import { s, type EnumSchema } from "../core/index.js";

export const Type11 = {
  Commentary: "commentary",
  Descriptive: "descriptive",
  Main: "main",
  Unknown: "unknown",
} as const;
export type Type11 = (typeof Type11)[keyof typeof Type11] | (string & {});

export const type11Schema: EnumSchema<Type11> = s.enumOf<Type11>(Type11);
