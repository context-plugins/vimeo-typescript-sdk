import { s, type EnumSchema } from "../core/index.js";

export const Portrait = {
  Hide: "hide",
  Show: "show",
  User: "user",
} as const;
export type Portrait = (typeof Portrait)[keyof typeof Portrait] | (string & {});

export const portraitSchema: EnumSchema<Portrait> = s.enumOf<Portrait>(Portrait);
