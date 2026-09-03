import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type36 = {
  Empty: "empty",
  Loop: "loop",
  Share: "share",
  Thumbnail: "thumbnail",
} as const;
export type Type36 = (typeof Type36)[keyof typeof Type36] | (string & {});

export const type36Schema: EnumSchema<Type36> = s.enumOf<Type36>(Type36);
