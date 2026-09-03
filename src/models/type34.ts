import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type34 = {
  Beginning: "beginning",
  Custom: "custom",
  Email: "email",
  Image: "image",
  Link: "link",
  Loop: "loop",
  Nothing: "nothing",
  Share: "share",
  Text: "text",
  Threevideos: "threevideos",
  Videos: "videos",
} as const;
export type Type34 = (typeof Type34)[keyof typeof Type34] | (string & {});

export const type34Schema: EnumSchema<Type34> = s.enumOf<Type34>(Type34);
