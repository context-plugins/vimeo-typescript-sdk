import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort21 = {
  Alphabetical: "alphabetical",
  Comments: "comments",
  Date: "date",
  Default: "default",
  Duration: "duration",
  Likes: "likes",
  Manual: "manual",
  ModifiedTime: "modified_time",
  Plays: "plays",
} as const;
export type Sort21 = (typeof Sort21)[keyof typeof Sort21] | (string & {});

export const sort21Schema: EnumSchema<Sort21> = s.enumOf<Sort21>(Sort21);
