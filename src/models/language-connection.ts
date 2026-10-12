import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => languageSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
