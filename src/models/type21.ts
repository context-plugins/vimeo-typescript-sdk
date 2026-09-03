import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type21 = {
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
export type Type21 = (typeof Type21)[keyof typeof Type21] | (string & {});

export const type21Schema: EnumSchema<Type21> = s.enumOf<Type21>(Type21);
