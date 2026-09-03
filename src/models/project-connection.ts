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
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => projectSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
