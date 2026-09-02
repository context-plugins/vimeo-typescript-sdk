import { s, type EnumSchema } from "../core/index.js";

export const Type37 = {
  Film: "film",
  Series: "series",
} as const;
export type Type37 = (typeof Type37)[keyof typeof Type37] | (string & {});

export const type37Schema: EnumSchema<Type37> = s.enumOf<Type37>(Type37);
