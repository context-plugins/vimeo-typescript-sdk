import { s, type EnumSchema } from "../core/index.js";

export const Owner = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Owner = (typeof Owner)[keyof typeof Owner] | (string & {});

export const ownerSchema: EnumSchema<Owner> = s.enumOf<Owner>(Owner);
