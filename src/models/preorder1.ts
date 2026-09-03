import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Preorder1 = {
  active?: boolean;
  publishTime?: string;
};

export const preorder1Schema: Schema<Preorder1> = s.object<Preorder1>({
  active: s.optional(s.boolean()),
  publishTime: s.optional(s.string()),
  _keysMap: {
    publishTime: "publish_time",
  },
});
