import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort17 = {
  Added: "added",
  Alphabetical: "alphabetical",
  Arranged: "arranged",
  Comments: "comments",
  Date: "date",
  Duration: "duration",
  Likes: "likes",
  Plays: "plays",
} as const;
export type Sort17 = (typeof Sort17)[keyof typeof Sort17] | (string & {});

export const sort17Schema: EnumSchema<Sort17> = s.enumOf<Sort17>(Sort17);
