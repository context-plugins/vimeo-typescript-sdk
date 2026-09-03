import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type ContentRating = {
  code: Code;
  name: string;
  uri: string | null;
};

export const contentRatingSchema: Schema<ContentRating> = s.object<ContentRating>({
  code: codeSchema,
  name: s.string(),
  uri: s.nullable(s.string()),
});
