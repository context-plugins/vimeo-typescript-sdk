import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Preorder = {
  /** Whether the On Demand page is available for preorder. */
  active: boolean;
  /** The time in ISO 8601 format when the preorder was cancelled. */
  cancelTime: string;
  /** The time in ISO 8601 format when the preorder was released to the public. */
  publishTime: string;
  /** The time in ISO 8601 format when the preorder started. */
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
