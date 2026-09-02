import { s, type Schema } from "../core/index.js";

export type LanguageReplacementTerms = {
  limit?: number;
  used?: number;
};

export const languageReplacementTermsSchema: Schema<LanguageReplacementTerms> =
  s.object<LanguageReplacementTerms>({
    limit: s.optional(s.number()),
    used: s.optional(s.number()),
  });
