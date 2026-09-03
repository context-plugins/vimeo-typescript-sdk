import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LanguageReplacementTerms = {
  limit?: number;
  used?: number;
};

export const languageReplacementTermsSchema: Schema<LanguageReplacementTerms> =
  s.object<LanguageReplacementTerms>({
    limit: s.optional(s.number()),
    used: s.optional(s.number()),
  });
