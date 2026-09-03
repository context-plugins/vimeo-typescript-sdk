import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Preorder = {
  active: boolean;
  cancelTime: string;
  publishTime: string;
  time: string;
};

export const preorderSchema: Schema<Preorder> = s.object<Preorder>({
  active: s.boolean(),
  cancelTime: s.string(),
  publishTime: s.string(),
  time: s.string(),
  _keysMap: {
    cancelTime: "cancel_time",
    publishTime: "publish_time",
  },
});
