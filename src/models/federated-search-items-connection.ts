import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { federatedSearchItemsSchema, type FederatedSearchItems } from "./federated-search-items.js";
import { pagingSchema, type Paging } from "./paging.js";

export type FederatedSearchItemsConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: FederatedSearchItems[];
};

export const federatedSearchItemsConnectionSchema: Schema<FederatedSearchItemsConnection> =
  s.object<FederatedSearchItemsConnection>({
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => federatedSearchItemsSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
