import { s, type Schema } from "../core/index.js";

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
