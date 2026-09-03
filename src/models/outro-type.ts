import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutroType = {
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
export type OutroType = (typeof OutroType)[keyof typeof OutroType] | (string & {});

export const outroTypeSchema: EnumSchema<OutroType> = s.enumOf<OutroType>(OutroType);
