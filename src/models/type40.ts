import { s, type EnumSchema } from "../core/index.js";

export const Type40 = {
  Empty: "empty",
  Loop: "loop",
  Share: "share",
  Thumbnail: "thumbnail",
} as const;
export type Type40 = (typeof Type40)[keyof typeof Type40] | (string & {});

export const type40Schema: EnumSchema<Type40> = s.enumOf<Type40>(Type40);
