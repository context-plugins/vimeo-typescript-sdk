import { s, type Schema } from "../core/index.js";
import { customMetadataSettingsSchema, type CustomMetadataSettings } from "./custom-metadata-settings.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CustomMetadataSettingsConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: CustomMetadataSettings[];
};

export const customMetadataSettingsConnectionSchema: Schema<CustomMetadataSettingsConnection> =
  s.object<CustomMetadataSettingsConnection>({
    total: s.optional(s.number()),
    page: s.optional(s.number()),
    perPage: s.optional(s.number()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => customMetadataSettingsSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
