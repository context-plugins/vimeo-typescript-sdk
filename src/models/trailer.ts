import { s, type Schema } from "../core/index.js";

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
