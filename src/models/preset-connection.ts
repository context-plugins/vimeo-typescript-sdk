import { s, type Schema } from "../core/index.js";
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
  total: s.optional(s.number()),
  page: s.optional(s.number()),
  perPage: s.optional(s.number()),
  paging: s.optional(s.lazy(() => pagingSchema)),
  data: s.optional(s.array(s.lazy(() => presetSchema))),
  _keysMap: {
    perPage: "per_page",
  },
});
