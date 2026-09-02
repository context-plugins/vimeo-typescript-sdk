import { s, type EnumSchema } from "../core/index.js";

export const Name1 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Name1 = (typeof Name1)[keyof typeof Name1] | (string & {});

export const name1Schema: EnumSchema<Name1> = s.enumOf<Name1>(Name1);
