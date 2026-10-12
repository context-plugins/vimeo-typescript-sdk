import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentSchema, type Comment } from "./comment.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CommentConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Comment[];
};

export const commentConnectionSchema: Schema<CommentConnection> = s.object<CommentConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => commentSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
