import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QueryFields = {
  Chapters: "chapters",
  Description: "description",
  Tags: "tags",
  Title: "title",
} as const;
export type QueryFields = (typeof QueryFields)[keyof typeof QueryFields] | (string & {});

export const queryFieldsSchema: EnumSchema<QueryFields> = s.enumOf<QueryFields>(QueryFields);
