import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingSchema, type Paging } from "./paging.js";
import { pictureSchema, type Picture } from "./picture.js";

export type PictureConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Picture[];
};

export const pictureConnectionSchema: Schema<PictureConnection> = s.object<PictureConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => pictureSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
