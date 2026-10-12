import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagingSchema, type Paging } from "./paging.js";
import { presetSchema, type Preset } from "./preset.js";

export type PresetConnection = {
  total?: number;
  page?: number;
  perPage?: number;
  paging?: Paging;
  data?: Preset[];
};

export const presetConnectionSchema: Schema<PresetConnection> = s.object<PresetConnection>({
  total: s.optional(s.int()),
  page: s.optional(s.int()),
  perPage: s.optional(s.int()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => presetSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
