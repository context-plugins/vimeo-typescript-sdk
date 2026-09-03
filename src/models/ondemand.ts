import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Ondemand = {
  options?: string[];
  resourceKey?: string;
  uri?: string;
};

export const ondemandSchema: Schema<Ondemand> = s.object<Ondemand>({
  options: s.optional(s.array(s.string())),
  resourceKey: s.optional(s.string()),
  uri: s.optional(s.string()),
  _keysMap: {
    resourceKey: "resource_key",
  },
});
