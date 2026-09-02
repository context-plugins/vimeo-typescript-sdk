import { s, type EnumSchema } from "../core/index.js";

export const Portrait1 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Portrait1 = (typeof Portrait1)[keyof typeof Portrait1] | (string & {});

export const portrait1Schema: EnumSchema<Portrait1> = s.enumOf<Portrait1>(Portrait1);
