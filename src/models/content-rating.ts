import { s, type Schema } from "../core/index.js";
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
