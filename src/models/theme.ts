import { s, type EnumSchema } from "../core/index.js";

export const Theme = {
  Dark: "dark",
  Standard: "standard",
} as const;
export type Theme = (typeof Theme)[keyof typeof Theme] | (string & {});

export const themeSchema: EnumSchema<Theme> = s.enumOf<Theme>(Theme);
