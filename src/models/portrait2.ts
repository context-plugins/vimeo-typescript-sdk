import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Portrait2 = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Portrait2 = (typeof Portrait2)[keyof typeof Portrait2] | (string & {});

export const portrait2Schema: EnumSchema<Portrait2> = s.enumOf<Portrait2>(Portrait2);
