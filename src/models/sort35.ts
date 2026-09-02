import { s, type EnumSchema } from "../core/index.js";

export const Sort35 = {
  Alphabetical: "alphabetical",
  Comments: "comments",
  Date: "date",
  Default: "default",
  Likes: "likes",
  Manual: "manual",
  Plays: "plays",
} as const;
export type Sort35 = (typeof Sort35)[keyof typeof Sort35] | (string & {});

export const sort35Schema: EnumSchema<Sort35> = s.enumOf<Sort35>(Sort35);
