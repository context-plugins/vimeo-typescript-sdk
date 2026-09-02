import { s, type Schema } from "../core/index.js";
import { comments5Schema, type Comments5 } from "./comments5.js";
import { embed19Schema, type Embed19 } from "./embed19.js";
import { view14Schema, type View14 } from "./view14.js";

export type Privacy14 = {
  add?: boolean;
  comments?: Comments5;
  download?: boolean;
  embed?: Embed19;
  view?: View14;
};

export const privacy14Schema: Schema<Privacy14> = s.object<Privacy14>({
  add: s.optional(s.boolean()),
  comments: s.optional(s.lazy(() => comments5Schema)),
  download: s.optional(s.boolean()),
  embed: s.optional(s.lazy(() => embed19Schema)),
  view: s.optional(s.lazy(() => view14Schema)),
});
