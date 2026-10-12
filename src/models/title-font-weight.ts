import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The selected video title font weight.
 *
 * Option descriptions:
 *  * `300` - Light
 *  * `400` - Regular
 *  * `500` - Medium
 *  * `700` - Bold
 */
export const TitleFontWeight = {
  _300: 300,
  _400: 400,
  _500: 500,
  _700: 700,
} as const;
export type TitleFontWeight = (typeof TitleFontWeight)[keyof typeof TitleFontWeight] | (number & {});

export const titleFontWeightSchema: EnumSchema<TitleFontWeight> = s.enumOf<TitleFontWeight>(TitleFontWeight);
