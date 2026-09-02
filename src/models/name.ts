import { s, type EnumSchema } from "../core/index.js";

export const Name = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
