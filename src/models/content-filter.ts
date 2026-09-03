import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
