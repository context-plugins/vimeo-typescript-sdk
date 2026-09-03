import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Theme = {
  Dark: "dark",
  Standard: "standard",
} as const;
export type Theme = (typeof Theme)[keyof typeof Theme] | (string & {});

export const themeSchema: EnumSchema<Theme> = s.enumOf<Theme>(Theme);
