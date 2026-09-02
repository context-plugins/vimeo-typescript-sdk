import { s, type EnumSchema } from "../core/index.js";

export const Type13 = {
  Video: "video",
} as const;
export type Type13 = (typeof Type13)[keyof typeof Type13] | (string & {});

export const type13Schema: EnumSchema<Type13> = s.enumOf<Type13>(Type13);
