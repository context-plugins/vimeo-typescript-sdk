import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort73 = {
  Alphabetical: "alphabetical",
  Comments: "comments",
  Date: "date",
  Duration: "duration",
  Likes: "likes",
  Plays: "plays",
  Relevant: "relevant",
} as const;
export type Sort73 = (typeof Sort73)[keyof typeof Sort73] | (string & {});

export const sort73Schema: EnumSchema<Sort73> = s.enumOf<Sort73>(Sort73);
