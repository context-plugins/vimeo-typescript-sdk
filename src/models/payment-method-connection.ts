import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingSchema, type Paging } from "./paging.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";

export type PaymentMethodConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: PaymentMethod[];
};

export const paymentMethodConnectionSchema: Schema<PaymentMethodConnection> =
  s.object<PaymentMethodConnection>({
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => paymentMethodSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
