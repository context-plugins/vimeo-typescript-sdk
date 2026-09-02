import { s, type Schema } from "../core/index.js";

export type GlossaryTerms = {
  limit?: number;
  used?: number;
};

export const glossaryTermsSchema: Schema<GlossaryTerms> = s.object<GlossaryTerms>({
  limit: s.optional(s.number()),
  used: s.optional(s.number()),
});
