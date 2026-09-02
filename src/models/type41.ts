import { s, type EnumSchema } from "../core/index.js";

export const Type41 = {
  Batch: "batch",
  Single: "single",
} as const;
export type Type41 = (typeof Type41)[keyof typeof Type41] | (string & {});

export const type41Schema: EnumSchema<Type41> = s.enumOf<Type41>(Type41);
