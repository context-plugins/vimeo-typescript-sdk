import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Preorder1 = {
  /** Whether to enable preorders on the On Demand page. */
  active?: boolean;
  /**
   * The time in ISO 8601 format when the On Demand page will be published. This parameter is
   * required when **preorder.active** is `true`.
   */
  publishTime?: string;
};

export const preorder1Schema: Schema<Preorder1> = s.object<Preorder1>({
  active: s.optional(s.boolean()),
  publishTime: s.optional(s.string()),
  _keysMap: {
    publishTime: "publish_time",
  },
});
