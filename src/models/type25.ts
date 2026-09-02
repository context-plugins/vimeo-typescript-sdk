import { s, type EnumSchema } from "../core/index.js";

export const Type25 = {
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
export type Type25 = (typeof Type25)[keyof typeof Type25] | (string & {});

export const type25Schema: EnumSchema<Type25> = s.enumOf<Type25>(Type25);
