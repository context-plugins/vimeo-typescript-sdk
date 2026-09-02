import { s, type EnumSchema } from "../core/index.js";

export const Type7 = {
  Live: "live",
  Stock: "stock",
  Video: "video",
} as const;
export type Type7 = (typeof Type7)[keyof typeof Type7] | (string & {});

export const type7Schema: EnumSchema<Type7> = s.enumOf<Type7>(Type7);
