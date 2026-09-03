import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Portrait = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Portrait = (typeof Portrait)[keyof typeof Portrait] | (string & {});

export const portraitSchema: EnumSchema<Portrait> = s.enumOf<Portrait>(Portrait);
