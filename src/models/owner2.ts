import { s, type EnumSchema } from "../core/index.js";

export const Owner2 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Owner2 = (typeof Owner2)[keyof typeof Owner2] | (string & {});

export const owner2Schema: EnumSchema<Owner2> = s.enumOf<Owner2>(Owner2);
