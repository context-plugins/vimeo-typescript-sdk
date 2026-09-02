import { s, type Schema } from "../core/index.js";
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
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => pictureSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
