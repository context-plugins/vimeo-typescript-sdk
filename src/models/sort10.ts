import { s, type EnumSchema } from "../core/index.js";

export const Sort10 = {
  Added: "added",
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
export type Sort10 = (typeof Sort10)[keyof typeof Sort10] | (string & {});

export const sort10Schema: EnumSchema<Sort10> = s.enumOf<Sort10>(Sort10);
