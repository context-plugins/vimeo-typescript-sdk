import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort15 = {
  Alphabetical: "alphabetical",
  Comments: "comments",
  Date: "date",
  Duration: "duration",
  Likes: "likes",
  Plays: "plays",
} as const;
export type Sort15 = (typeof Sort15)[keyof typeof Sort15] | (string & {});

export const sort15Schema: EnumSchema<Sort15> = s.enumOf<Sort15>(Sort15);
