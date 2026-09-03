import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type38 = {
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
export type Type38 = (typeof Type38)[keyof typeof Type38] | (string & {});

export const type38Schema: EnumSchema<Type38> = s.enumOf<Type38>(Type38);
