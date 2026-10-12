import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingSchema, type Paging } from "./paging.js";
import { projectSchema, type Project } from "./project.js";

export type ProjectConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Project[];
};

export const projectConnectionSchema: Schema<ProjectConnection> = s.object<ProjectConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => projectSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
