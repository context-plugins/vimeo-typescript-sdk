import { s, type Schema } from "../core/index.js";
import { glossaryTermsSchema, type GlossaryTerms } from "./glossary-terms.js";
import {
  languageReplacementTermsSchema,
  type LanguageReplacementTerms,
} from "./language-replacement-terms.js";

export type AccountDictionaryQuota = {
  glossaryTerms?: GlossaryTerms;
  languageReplacementTerms?: LanguageReplacementTerms;
};

export const accountDictionaryQuotaSchema: Schema<AccountDictionaryQuota> = s.object<AccountDictionaryQuota>({
  glossaryTerms: s.optional(s.lazy(() => glossaryTermsSchema)),
  languageReplacementTerms: s.optional(s.lazy(() => languageReplacementTermsSchema)),
  _keysMap: {
    glossaryTerms: "glossary_terms",
    languageReplacementTerms: "language_replacement_terms",
  },
});
