import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingSchema, type Paging } from "./paging.js";
import { userSchema, type User } from "./user.js";

export type UserConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: User[];
};

export const userConnectionSchema: Schema<UserConnection> = s.object<UserConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => userSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
