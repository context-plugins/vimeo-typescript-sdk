import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments4Schema, type Comments4 } from "./comments4.js";
import { embed11Schema, type Embed11 } from "./embed11.js";
import { view11Schema, type View11 } from "./view11.js";

export type Privacy10 = {
  add?: boolean;
  comments?: Comments4;
  download?: boolean;
  embed?: Embed11;
  embedAllowedDomains?: string[];
  view?: View11;
};

export const privacy10Schema: Schema<Privacy10> = s.object<Privacy10>({
  add: s.optional(s.boolean()),
  comments: s.optional(s.lazy(() => comments4Schema)),
  download: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed11Schema)),
  embedAllowedDomains: s.optional(s.array(s.string())),
  view: s.optional(s.lazy(() => view11Schema)),
  _keysMap: {
    embedAllowedDomains: "embed_allowed_domains",
  },
});
