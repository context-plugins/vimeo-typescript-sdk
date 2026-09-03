import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort6 = {
  Alphabetical: "alphabetical",
  Comments: "comments",
  Date: "date",
  Duration: "duration",
  Featured: "featured",
  Likes: "likes",
  Plays: "plays",
  Relevant: "relevant",
} as const;
export type Sort6 = (typeof Sort6)[keyof typeof Sort6] | (string & {});

export const sort6Schema: EnumSchema<Sort6> = s.enumOf<Sort6>(Sort6);
