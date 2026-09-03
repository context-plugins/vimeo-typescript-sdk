import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trailer = {
  options?: string[];
  resourceKey?: string;
  uri?: string;
};

export const trailerSchema: Schema<Trailer> = s.object<Trailer>({
  options: s.optional(s.array(s.string())),
  resourceKey: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    resourceKey: "resource_key",
  },
});
