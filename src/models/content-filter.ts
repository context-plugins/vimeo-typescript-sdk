import { s, type EnumSchema } from "../core/index.js";

export const ContentFilter = {
  Drugs: "drugs",
  Language: "language",
  Nudity: "nudity",
  Safe: "safe",
  Unrated: "unrated",
  Violence: "violence",
} as const;
export type ContentFilter = (typeof ContentFilter)[keyof typeof ContentFilter] | (string & {});

export const contentFilterSchema: EnumSchema<ContentFilter> = s.enumOf<ContentFilter>(ContentFilter);
