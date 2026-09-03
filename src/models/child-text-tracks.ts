import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filtersSchema, type Filters } from "./filters.js";

export type ChildTextTracks = {
  filters?: Filters;
  options?: string[];
  uri?: string;
};

export const childTextTracksSchema: Schema<ChildTextTracks> = s.object<ChildTextTracks>({
  filters: s.optional(s.lazy(() => filtersSchema)),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
});
