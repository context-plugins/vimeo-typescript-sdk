import { s, type EnumSchema } from "../core/index.js";

export const Type57 = {
  Commentary: "commentary",
  Descriptive: "descriptive",
  Main: "main",
} as const;
export type Type57 = (typeof Type57)[keyof typeof Type57] | (string & {});

export const type57Schema: EnumSchema<Type57> = s.enumOf<Type57>(Type57);
