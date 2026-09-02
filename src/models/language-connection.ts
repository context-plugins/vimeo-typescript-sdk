import { s, type Schema } from "../core/index.js";
import { languageSchema, type Language } from "./language.js";
import { pagingSchema, type Paging } from "./paging.js";

export type LanguageConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Language[];
};

export const languageConnectionSchema: Schema<LanguageConnection> = s.object<LanguageConnection>({
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => languageSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
