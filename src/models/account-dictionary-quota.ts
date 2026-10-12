import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { glossaryTermsSchema, type GlossaryTerms } from "./glossary-terms.js";
import {
  languageReplacementTermsSchema,
  type LanguageReplacementTerms,
} from "./language-replacement-terms.js";

/** Account dictionary usage and entry limits. */
export type AccountDictionaryQuota = {
  /** Glossary term usage and limit. */
  glossaryTerms?: GlossaryTerms;
  /** Language replacement source-term usage and limit. */
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
