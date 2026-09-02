import { s, type EnumSchema } from "../core/index.js";

export const TitleFontWeight = {
  _300: 300,
  _400: 400,
  _500: 500,
  _700: 700,
} as const;
export type TitleFontWeight = (typeof TitleFontWeight)[keyof typeof TitleFontWeight] | (number & {});

export const titleFontWeightSchema: EnumSchema<TitleFontWeight> = s.enumOf<TitleFontWeight>(TitleFontWeight);
