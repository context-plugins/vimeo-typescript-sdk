import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Language replacement source-term usage and limit. */
export type LanguageReplacementTerms = {
  /** The maximum number of language replacement source terms permitted for the account. */
  limit?: number;
  /** The number of distinct active language replacement source terms. */
  used?: number;
};

export const languageReplacementTermsSchema: Schema<LanguageReplacementTerms> =
  s.object<LanguageReplacementTerms>({
    limit: s.optional(s.float64()),
    used: s.optional(s.float64()),
  });
