import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GlossaryTerms = {
  limit?: number;
  used?: number;
};

export const glossaryTermsSchema: Schema<GlossaryTerms> = s.object<GlossaryTerms>({
  limit: s.optional(s.number()),
  used: s.optional(s.number()),
});
