import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort19 = {
  AddedFirst: "added_first",
  AddedLast: "added_last",
  Alphabetical: "alphabetical",
  AlphabeticalDesc: "alphabetical_desc",
  Arranged: "arranged",
  Comments: "comments",
  Likes: "likes",
  ModifiedTimeAsc: "modified_time_asc",
  ModifiedTimeDesc: "modified_time_desc",
  Newest: "newest",
  Oldest: "oldest",
  Plays: "plays",
} as const;
export type Sort19 = (typeof Sort19)[keyof typeof Sort19] | (string & {});

export const sort19Schema: EnumSchema<Sort19> = s.enumOf<Sort19>(Sort19);
