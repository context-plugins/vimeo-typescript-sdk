import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
    total: s.optional(s.int()),
    page: s.optional(s.int()),
    perPage: s.optional(s.int()),
    paging: s.optional(s.lazy(() => pagingSchema)),
    data: s.optional(s.array(s.lazy(() => customMetadataSettingsSchema))),
    _keysMap: {
      perPage: "per_page",
    },
  });
