import { s, type Schema } from "../core/index.js";

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
