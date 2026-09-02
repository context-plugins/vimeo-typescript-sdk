import { s, type EnumSchema } from "../core/index.js";

export const Type15 = {
  Video: "video",
} as const;
export type Type15 = (typeof Type15)[keyof typeof Type15] | (string & {});

export const type15Schema: EnumSchema<Type15> = s.enumOf<Type15>(Type15);
