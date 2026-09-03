import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comments8Schema, type Comments8 } from "./comments8.js";
import { embed19Schema, type Embed19 } from "./embed19.js";
import { view14Schema, type View14 } from "./view14.js";

export type Privacy20 = {
  add?: boolean;
  comments?: Comments8;
  download?: boolean;
  embed?: Embed19;
  view?: View14;
};

export const privacy20Schema: Schema<Privacy20> = s.object<Privacy20>({
  add: s.optional(s.boolean()),
  comments: s.optional(s.lazy(() => comments8Schema)),
  download: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed19Schema)),
  view: s.optional(s.lazy(() => view14Schema)),
});
