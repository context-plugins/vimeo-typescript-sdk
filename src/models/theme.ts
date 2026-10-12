import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The color theme of the showcase.
 *
 * Option descriptions:
 *  * `dark` - The showcase uses the dark theme.
 *  * `standard` - The showcase uses the standard theme.
 */
export const Theme = {
  Dark: "dark",
  Standard: "standard",
} as const;
export type Theme = (typeof Theme)[keyof typeof Theme] | (string & {});

export const themeSchema: EnumSchema<Theme> = s.enumOf<Theme>(Theme);
