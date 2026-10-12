import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Glossary term usage and limit. */
export type GlossaryTerms = {
  /** The maximum number of glossary terms permitted for the account. */
  limit?: number;
  /** The number of active glossary terms. */
  used?: number;
};

export const glossaryTermsSchema: Schema<GlossaryTerms> = s.object<GlossaryTerms>({
  limit: s.optional(s.float64()),
  used: s.optional(s.float64()),
});
